import React, { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'eshop-user'
const USERS_KEY = 'eshop-users'

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      } else {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      // ignore
    }
  }, [user])

  const signup = ({ name, email, password }) => {
    const trimmedEmail = email.trim().toLowerCase()
    const usersRaw = window.localStorage.getItem(USERS_KEY)
    const users = usersRaw ? JSON.parse(usersRaw) : []

    if (users.some((u) => u.email === trimmedEmail)) {
      throw new Error('An account with this email already exists.')
    }

    const newUser = { name: name.trim(), email: trimmedEmail, password }
    const updatedUsers = [...users, newUser]
    window.localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers))
    setUser({ name: newUser.name, email: newUser.email })
  }

  const login = ({ email, password }) => {
    const trimmedEmail = email.trim().toLowerCase()
    const usersRaw = window.localStorage.getItem(USERS_KEY)
    const users = usersRaw ? JSON.parse(usersRaw) : []

    const existing = users.find(
      (u) => u.email === trimmedEmail && u.password === password
    )
    if (!existing) {
      throw new Error('Invalid email or password.')
    }

    setUser({ name: existing.name, email: existing.email })
  }

  const logout = () => {
    setUser(null)
  }

  const value = { user, signup, login, logout, isAuthenticated: !!user }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}

