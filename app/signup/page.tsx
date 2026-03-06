'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const roles = [
  'Front Desk',
  'Doctor',
  'Billing Operator',
  'Administrator',
]

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: 'Front Desk'
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (res.ok) {
        router.push('/login')
      } else {
        setError(data.error)
      }
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border bg-muted/40 p-8 shadow-sm">

        {/* Title */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-sm text-muted-foreground">
            Register to get started
          </p>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input
                placeholder="Sahil"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input
                placeholder="Sharma"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-5 space-y-2">
            <Label>Email</Label>
            <Input
              placeholder="you@example.com"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div className="mt-5 space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {/* User Type */}
          <div className="mt-5 space-y-3">
            <Label>User Type</Label>

            <RadioGroup
              value={formData.user_type}
              onValueChange={(value) => setFormData({ ...formData, user_type: value })}
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

          {/* Sign Up */}
          <Button className="mt-6 w-full" size="lg" type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
