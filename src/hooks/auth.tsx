import useSWR from 'swr'
import axios from '@/lib/axios'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useRouter } from 'next/router'

type Props = {
  middleware?: string
  redirectIfAuthenticated?: string
}

export const useAuth = ({
  middleware,
  redirectIfAuthenticated = '/notes/'
}: Props = {}) => {
  const router = useRouter()

  const {
    data: user,
    error,
    mutate
  } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error

        router.push('/verify-email')
      })
  )

  const csrf = (): Promise<void> => axios.get('/sanctum/csrf-cookie')

  type RegisterProps = {
    setErrors: Dispatch<SetStateAction<unknown[]>>
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }

  const register = async ({
    setErrors,
    name,
    email,
    password,
    passwordConfirmation
  }: RegisterProps): Promise<void> => {
    await csrf()

    setErrors([])

    axios
      .post('/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      })
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  type LoginProps = {
    setErrors: Dispatch<SetStateAction<unknown[]>>
    setStatus: Dispatch<SetStateAction<string | null>>
    email: string
    password: string
  }

  const login = async ({
    setErrors,
    setStatus,
    email,
    password
  }: LoginProps): Promise<void> => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('/login', { email, password })
      .then(() => mutate())
      .catch((error) => {
        console.log(error.response)
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  type ForgotPasswordProps = {
    setErrors: Dispatch<SetStateAction<unknown[]>>
    setStatus: Dispatch<SetStateAction<string | null>>
    email: string
  }

  const forgotPassword = async ({
    setErrors,
    setStatus,
    email
  }: ForgotPasswordProps): Promise<void> => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('/forgot-password', { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  type ResetPasswordProps = {
    setErrors: Dispatch<SetStateAction<unknown[]>>
    setStatus: Dispatch<SetStateAction<string | null>>
    email: string
    password: string
    passwordConfirmation: string
  }

  const resetPassword = async ({
    setErrors,
    setStatus,
    email,
    password,
    passwordConfirmation
  }: ResetPasswordProps): Promise<void> => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('/reset-password', {
        token: router.query.token,
        email,
        password,
        passwordConfirmation
      })
      .then((response) =>
        router.push('/login?reset=' + window.btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const resendEmailVerification = ({
    setStatus
  }: {
    setStatus: Dispatch<SetStateAction<string | null>>
  }): void => {
    axios
      .post('/email/verification-notification')
      .then((response) => setStatus(response.data.status))
  }

  const logout = async (): Promise<void> => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }

    window.location.pathname = process.env.NEXT_PUBLIC_BASE_PATH + '/login'
  }

  const withdraw = async (): Promise<void> => {
    await csrf()
    axios.delete('/withdraw').then(() => mutate())
  }

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (middleware === 'auth' && error) logout()
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
    withdraw
  }
}
