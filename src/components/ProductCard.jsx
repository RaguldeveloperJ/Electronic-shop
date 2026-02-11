import React from 'react'
import { Link } from 'react-router-dom'
import { RatingStars } from './RatingStars'
import { Badge } from './Badge'
import { useCart } from '../context/CartContext'

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : null

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${product.id}`} className="relative block aspect-[4/3]">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1">
          {product.badges?.map((b) => (
            <Badge key={b} label={b} />
          ))}
          {discount && <Badge label={`-${discount}%`} />}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 px-4 py-3 text-sm">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {product.brand}
          </p>
          <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
        </div>
        <RatingStars rating={product.rating} />
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-semibold text-slate-900">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-slate-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

