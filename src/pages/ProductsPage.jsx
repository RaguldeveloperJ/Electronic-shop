import React, { useState } from 'react'
import { products } from '../data/products'
import { SearchBar } from '../components/SearchBar'
import { ProductCard } from '../components/ProductCard'
import { useSearchProducts } from '../hooks/useSearchProducts'

const categories = ['All', 'Laptop', 'Phone', 'Headphones', 'Accessory']

export const ProductsPage = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useSearchProducts(products, { query, category })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">All products</h1>
          <p className="mt-1 text-sm text-slate-600">
            Browse and search laptops, smartphones, headphones, and accessories.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search by name, brand, or category"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">
          No products found. Try a different search phrase or category.
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

