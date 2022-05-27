import ApplicationLogo from '@/components/Common/ApplicationLogo'
import AuthCard from '@/components/Auth/AuthCard'
import AuthSessionStatus from '@/components/Auth/AuthSessionStatus'
import AuthValidationErrors from '@/components/Auth/AuthValidationErrors'
import Button from '@/components/Common/Button'
import GuestLayout from '@/components/Common/Layouts/GuestLayout'
import Input from '@/components/Auth/Input'
import Label from '@/components/Auth/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FullSizeLoading from '@/components/Common/FullSizeLoading'

const Login: React.VFC = () => {
  const router = useRouter()

  const { login } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<unknown[]>([])
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const submitForm = async (event: { preventDefault: () => void }) => {
    setLoading(true)
    event.preventDefault()
    await login({ setErrors, setStatus, email, password })
    setLoading(false)
  }

  useEffect(() => {
    if (
      router.query.reset &&
      router.query.reset.length > 0 &&
      errors.length === 0
    ) {
      setStatus(window.atob(router.query.reset as string))
    } else {
      setStatus(null)
    }
  })

  if (loading) {
    return <FullSizeLoading />
  } else {
    return (
      <GuestLayout>
        <AuthCard
          logo={
            <a>
              <ApplicationLogo />
            </a>
          }>
          {/* Session Status */}
          <AuthSessionStatus className="mb-4" status={status} />

          {/* Validation Errors */}
          <AuthValidationErrors className="mb-4" errors={errors} />

          <form onSubmit={submitForm}>
            {/* Email Address */}
            <div>
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                value={email}
                className="block mt-1 w-full"
                onChange={(event) => setEmail(event.target.value)}
                required
                autoFocus
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                value={password}
                className="block mt-1 w-full"
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            {/* Remember Me */}
            <div className="block mt-4">
              <label htmlFor="remember_me" className="inline-flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  name="remember"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />

                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link href="/register">
                <a className="underline text-sm text-gray-600 hover:text-gray-900 mr-4">
                  Sign up
                </a>
              </Link>

              {/*
              <Link href="/forgot-password">
                <a className="underline text-sm text-gray-600 hover:text-gray-900">
                 Forgot your password?
                </a>
              </Link>
              */}

              <Button className="ml-3">Login</Button>
            </div>
          </form>
        </AuthCard>
      </GuestLayout>
    )
  }
}

export default Login
