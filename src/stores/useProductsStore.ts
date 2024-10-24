import { create } from 'zustand'

import { logger } from '../utilities'
import type { Product } from '../api/types'
import { getProducts } from '../api/productApi'

type State = {
  products: Product[]
  isLoading: boolean
  isError: boolean
  searchItem: string
  filteredProducts: Product[]
}

type Action = {
  getProducts: () => Promise<void>
  setSearchItem: (term: string) => void
  filterProducts: (searchTerm: string) => void
}

export const useProductsStore = create<State & Action>(set => ({
  products: [],
  isLoading: false,
  isError: false,
  searchItem: '',
  filteredProducts: [],
  getProducts: async () => {
    set({ isLoading: true })

    try {
      const response = await getProducts()
      set({ products: response })
      set({ filteredProducts: response })
    } catch (err) {
      logger.error('Error fetching products:', err)
      set({ isError: true })
    } finally {
      set({ isLoading: false })
    }
  },
  setSearchItem: (item: string) => {
    set({ searchItem: item })
  },
  filterProducts: (searchTerm: string) =>
    set(state => ({
      filteredProducts: state.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })),
}))
