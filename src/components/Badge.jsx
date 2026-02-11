import React from 'react'

export const Badge = ({ label }) => {
  const normalized = label.toLowerCase()
  const color =
    normalized === 'new'
      ? 'bg-emerald-100 text-emerald-700'
      : normalized.includes('sale') || normalized.includes('%')
      ? 'bg-rose-100 text-rose-700'
      : 'bg-slate-100 text-slate-700'

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${color}`}
    >
      {label}
    </span>
  )
}

