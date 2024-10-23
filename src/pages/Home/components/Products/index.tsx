import en from '../../../../i18n/en.json'
import { useProductsStore } from '../../../../stores'
import { ProductCard } from './components/ProductCard'
import productNotFoundLogo from '../../../../assets/productNotFoundLogo.png'

export const Products = () => {
  const products = useProductsStore(state => state.filteredProducts)

  const renderProducts = () => {
    if (!products.length) {
      return (
        <div className="flex flex-col flex-1 items-center justify-center">
          <img
            className="size-16"
            src={productNotFoundLogo}
            alt={en.products.errors.notFound.altText}
          />
          <p>{en.products.errors.notFound.title}</p>
        </div>
      )
    }
    return (
      <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 gap-2 px-8 py-9">
        {products.map(product => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    )
  }

  return renderProducts()
}
