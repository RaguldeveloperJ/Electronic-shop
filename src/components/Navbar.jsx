import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export const Navbar = () => {
  const { totalItems } = useCart()
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
            E-Shop
          </span>
          <span className="text-base font-semibold text-slate-900">
            Electronic Shop
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-slate-900'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'text-primary' : 'hover:text-slate-900'
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-1 text-primary'
                : 'flex items-center gap-1 hover:text-slate-900'
            }
          >
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </NavLink>
          {user ? (
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="hidden sm:inline">
                Hi, <span className="font-semibold">{user.name}</span>
              </span>
              <button
                type="button"
                onClick={logout}
                className="text-[11px] font-semibold text-slate-500 hover:text-rose-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? 'text-primary' : 'hover:text-slate-900'
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-full bg-primary px-3 py-1.5 text-white'
                    : 'rounded-full border border-primary px-3 py-1.5 text-primary hover:bg-primary hover:text-white'
                }
              >
                Sign up
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

