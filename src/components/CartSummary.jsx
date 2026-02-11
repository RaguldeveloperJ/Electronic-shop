import React from 'react'
import { useCart } from '../context/CartContext'

export const CartSummary = () => {
  const { subtotal, totalItems } = useCart()
  const estimatedTax = subtotal * 0.08
  const total = subtotal + estimatedTax

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-900">Order summary</h2>
      <dl className="space-y-1 text-sm">
        <div className="flex justify-between">
          <dt className="text-slate-500">Items</dt>
          <dd className="text-slate-700">{totalItems}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">Subtotal</dt>
          <dd className="text-slate-700">${subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-500">Estimated tax</dt>
          <dd className="text-slate-700">${estimatedTax.toFixed(2)}</dd>
        </div>
        <div className="mt-2 flex justify-between border-t border-dashed border-slate-200 pt-2">
          <dt className="text-sm font-semibold text-slate-900">Total</dt>
          <dd className="text-base font-semibold text-slate-900">
            ${total.toFixed(2)}
          </dd>
        </div>
      </dl>
      <button
        type="button"
        className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
      >
        Proceed to checkout
      </button>
    </div>
  )
}

