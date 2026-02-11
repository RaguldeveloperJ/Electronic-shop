import React from 'react'
import { Navbar } from '../components/Navbar'

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Electronic Shop</span>
          <span>Demo frontend (React + Tailwind)</span>
        </div>
      </footer>
    </div>
  )
}

