import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { ImageGallery } from '../components/ImageGallery'
import { RatingStars } from '../components/RatingStars'
import { Badge } from '../components/Badge'
import { useCart } from '../context/CartContext'

export const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">
        Product not found.
      </div>
    )
  }

  const handleAdd = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)]">
        <ImageGallery images={product.images} alt={product.name} />

        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {product.brand} · {product.category}
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-900">
              {product.name}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <RatingStars rating={product.rating} />
            <div className="flex flex-wrap gap-1">
              {product.badges?.map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-2xl font-semibold text-slate-900">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-slate-400 line-through">
                ${product.oldPrice}
              </span>
            )}
            <span className="text-xs text-emerald-600">
              In stock · {product.stock} units
            </span>
          </div>

          <p className="text-sm text-slate-600">{product.description}</p>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center rounded-lg border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="h-9 w-9 text-lg text-slate-500 hover:text-slate-900"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value) || 1))
                }
                className="h-9 w-12 border-x border-slate-200 text-center text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="h-9 w-9 text-lg text-slate-500 hover:text-slate-900"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

