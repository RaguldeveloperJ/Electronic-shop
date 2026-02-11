import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  // In-memory users for this browser tab only (no localStorage, no backend)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  const signup = ({ name, email, password }) => {
    const trimmedEmail = email.trim().toLowerCase()

    if (users.some((u) => u.email === trimmedEmail)) {
      throw new Error('An account with this email already exists.')
    }

    const newUser = { name: name.trim(), email: trimmedEmail, password }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setUser({ name: newUser.name, email: newUser.email })
  }

  const login = ({ email, password }) => {
    const trimmedEmail = email.trim().toLowerCase()

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

