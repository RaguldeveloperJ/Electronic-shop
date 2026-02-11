import React from 'react'

export const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative w-full max-w-md">
      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Search products'}
        className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 shadow-sm outline-none ring-primary/30 placeholder:text-slate-400 focus:border-primary focus:ring"
      />
    </div>
  )
}

