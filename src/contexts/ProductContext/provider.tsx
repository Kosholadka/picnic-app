import { type ReactNode, useCallback, useMemo, useState } from 'react'

import { logger } from '../../utilities'
import { ProductContext } from './context'
import { productApi } from '../../api/productApi'
import type { Product, ProductDetails } from '../../api/types'

export const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [productDetails, setProductDetails] = useState<ProductDetails>()
  const [isProductDetailsLoading, setIsProductDetailsLoading] = useState(false)

  const handleGetProducts = useCallback(async () => {
    setIsError(false)
    setIsLoading(true)

    try {
      const products = await productApi.getProducts()
      setProducts(products)
    } catch (error) {
      logger.error(`Error in ProductContextProvider.handleGetProducts -> ${error}`)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleFilterProducts = useCallback(async (searchItem: string) => {
    setIsError(false)
    setIsLoading(true)
    
    try {
      const filteredProducts = await productApi.getFilteredProducts(searchItem)
      setProducts(filteredProducts)
    } catch (error) {
      logger.error(`Error in ProductContextProvider.handleFilterProducts -> ${error}`)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleGetProductDetails = useCallback(async (id: string) => {
    setIsError(false)
    setIsProductDetailsLoading(true)

    try {
      const productDetails = await productApi.getProductDetails(id)
      setProductDetails(productDetails)
    } catch (error) {
      logger.error(`Error in ProductContextProvider.handleGetProductDetails -> ${error}`)
      setIsError(true)
    } finally {
      setIsProductDetailsLoading(false)
    }
  }, [])

  const value = useMemo(() => {
    const obj: ProductContext.Value = {
      isError,
      products,
      isLoading,
      productDetails,
      isProductDetailsLoading,
      getProducts: handleGetProducts,
      filterProducts: handleFilterProducts,
      getProductDetails: handleGetProductDetails,
    }
    return obj
  }, [
    isError,
    products,
    isLoading,
    productDetails,
    handleGetProducts,
    handleFilterProducts,
    isProductDetailsLoading,
    handleGetProductDetails,
  ])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
