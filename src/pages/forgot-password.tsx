import ApplicationLogo from '@/components/Common/ApplicationLogo'
import AuthCard from '@/components/Auth/AuthCard'
import AuthSessionStatus from '@/components/Auth/AuthSessionStatus'
import AuthValidationErrors from '@/components/Auth/AuthValidationErrors'
import Button from '@/components/Common/Button'
import GuestLayout from '@/components/Common/Layouts/GuestLayout'
import Input from '@/components/Auth/Input'
import Label from '@/components/Auth/Label'
import { useAuth } from '@/hooks/auth'
import React, { useState } from 'react'
import FullSizeLoading from '@/components/Common/FullSizeLoading'

const ForgotPassword: React.VFC = () => {
  const { forgotPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<unknown[]>([])
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const submitForm = async (event: { preventDefault: () => void }) => {
    setLoading(true)
    event.preventDefault()
    await forgotPassword({ setErrors, setStatus, email })
    setLoading(false)
  }

  if (loading) {
    return <FullSizeLoading />
  } else {
    return (
      <GuestLayout>
        <AuthCard logo={<ApplicationLogo />}>
          <div className="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
          </div>

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
                name="email"
                value={email}
                className="block mt-1 w-full"
                onChange={(event) => setEmail(event.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Button>Email Password Reset Link</Button>
            </div>
          </form>
        </AuthCard>
      </GuestLayout>
    )
  }
}

export default ForgotPassword
