import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      login({ email, password })
      navigate('/')
    } catch (err) {
      setError(err.message || 'Failed to login.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 px-4">
      <div className="grid w-full max-w-3xl gap-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur md:grid-cols-[1.1fr,0.9fr] md:p-8">
        <div className="hidden flex-col justify-between rounded-2xl bg-slate-900 px-6 py-6 text-slate-100 md:flex">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Electronic Shop
            </p>
            <h2 className="text-lg font-semibold">
              Welcome back to your favorite tech store.
            </h2>
            <p className="text-xs text-slate-300">
              Track your orders, save your cart, and checkout faster across
              devices with a free account.
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-xs text-slate-300">
            <li>• Access your cart from any device</li>
            <li>• Get personalized product recommendations</li>
            <li>• Save your shipping details for next time</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="space-y-1 text-center md:text-left">
            <h1 className="text-xl font-semibold text-slate-900">
              Login to your account
            </h1>
            <p className="text-xs text-slate-500">
              Enter your email and password to continue.
            </p>
          </div>

          {error && (
            <div className="rounded-md bg-rose-50 px-3 py-2 text-xs text-rose-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-9 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 md:text-left">
            New here?{' '}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:text-blue-700"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

