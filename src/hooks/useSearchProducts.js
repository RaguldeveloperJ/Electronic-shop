import { useMemo } from 'react'

export const useSearchProducts = (allProducts, { query, category }) => {
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return allProducts.filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.brand.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)

      const matchesCategory =
        !category || category === 'All' || product.category === category

      return matchesQuery && matchesCategory
    })
  }, [allProducts, query, category])

  return filtered
}

