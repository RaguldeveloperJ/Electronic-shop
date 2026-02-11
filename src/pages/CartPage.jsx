import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { CartSummary } from '../components/CartSummary'

export const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart()
  const { isAuthenticated } = useAuth()

  if (items.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-900">Your cart</h1>
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">
          Your cart is empty. Browse products and add items to your cart to see
          them here.
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Your cart</h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs font-medium text-rose-600 hover:text-rose-700"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)]">
        <div className="space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="h-20 w-24 rounded-lg object-cover"
              />
              <div className="flex flex-1 flex-col gap-1 text-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {product.brand}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {product.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                    className="text-xs text-slate-400 hover:text-rose-500"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center rounded-lg border border-slate-200 bg-white">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(product.id, quantity - 1)
                      }
                      className="h-8 w-8 text-lg text-slate-500 hover:text-slate-900"
                    >
                      −
                    </button>
                    <span className="h-8 w-10 border-x border-slate-200 text-center text-xs leading-8">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(product.id, quantity + 1)
                      }
                      className="h-8 w-8 text-lg text-slate-500 hover:text-slate-900"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      ${(product.price * quantity).toFixed(2)}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      ${product.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <CartSummary />

          {!isAuthenticated && (
            <div className="space-y-2 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
              <p className="font-semibold">
                You are checking out as a guest.
              </p>
              <p>
                To save your cart and speed up future purchases,{' '}
                <Link
                  to="/login"
                  className="font-semibold underline underline-offset-2"
                >
                  login
                </Link>{' '}
                or{' '}
                <Link
                  to="/signup"
                  className="font-semibold underline underline-offset-2"
                >
                  create an account
                </Link>
                .
              </p>
            </div>
          )}

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Checkout details (demo)
            </h2>
            <div className="grid gap-3 text-sm">
              <input
                type="text"
                placeholder="Full name"
                className="h-9 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-9 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              />
              <input
                type="text"
                placeholder="Shipping address"
                className="h-9 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              />
              <input
                type="text"
                placeholder="Card number (demo only)"
                className="h-9 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              />
            </div>
            <p className="text-[11px] text-slate-400">
              This is a demo checkout form. No real payment is processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

