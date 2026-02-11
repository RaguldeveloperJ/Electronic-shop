import React from 'react'

export const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5
  const total = 5

  return (
    <div className="flex items-center gap-0.5 text-xs">
      {Array.from({ length: total }).map((_, index) => {
        const filled = index < fullStars
        const half = !filled && hasHalf && index === fullStars

        return (
          <span
            key={index}
            className={filled || half ? 'text-amber-400' : 'text-slate-300'}
          >
            ★
          </span>
        )
      })}
      <span className="ml-1 text-[11px] text-slate-500">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

