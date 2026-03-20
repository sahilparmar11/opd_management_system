'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Mail, Lock, Eye, EyeOff, HeartPulse } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const roles = [
  'Front Desk',
  'Doctor',
  'Billing Operator',
  'Administrator',
]

const Login = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    user_type: 'Front Desk',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      router.push('/dashboard')

    } catch (err) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">

        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex aspect-square size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <HeartPulse className="size-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">OutCare</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Access your medical workspace
          </p>
        </div>

        {error && (
          <p className="mb-4 text-sm text-amber-500">{error}</p>
        )}

        <div className="space-y-2">
          <Label>Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <Label>Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="pl-10 pr-10"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <Label>User Type</Label>

          <RadioGroup
            value={formData.user_type}
            onValueChange={(value) =>
              setFormData({ ...formData, user_type: value })
            }
            className="grid grid-cols-2 gap-3"
          >
            {roles.map(role => (
              <Label
                key={role}
                className="flex cursor-pointer items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm hover:bg-muted"
              >
                <RadioGroupItem value={role} />
                {role}
              </Label>
            ))}
          </RadioGroup>
        </div>

        <Button
          className="mt-6 w-full"
          size="lg"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
