import React, { useState } from 'react'

export const ImageGallery = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images.length) {
    return null
  }

  const active = images[activeIndex] ?? images[0]

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
        <img
          src={active}
          alt={alt}
          className="h-64 w-full object-cover sm:h-80 md:h-96"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border ${
                index === activeIndex
                  ? 'border-primary ring-2 ring-primary/40'
                  : 'border-slate-200'
              }`}
            >
              <img
                src={src}
                alt={`${alt} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

