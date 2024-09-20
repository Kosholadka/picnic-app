import { useState } from 'react'
import { TfiClose } from 'react-icons/tfi'

import en from '../../../../i18n/en.json'
import { useCartStore } from '../../../../stores'
import { AddToCartButton } from '../../../../uikit'

export const CartItem = () => {
  const [removingItem, setRemovingItem] = useState<{
    id: string | null
    confirmed: boolean
  }>({ id: null, confirmed: false })

  const { cartItems, removeItemFromCart } = useCartStore(state => ({
    cartItems: state.cartItems,
    removeItemFromCart: state.removeItemFromCart,
  }))

  const handleRemoveItemClick = (itemId: string) => {
    setRemovingItem({ id: itemId, confirmed: true })
    setTimeout(() => {
      if (removingItem.id === itemId && removingItem.confirmed) {
        removeItemFromCart(itemId)
        setRemovingItem({ id: null, confirmed: false })
      }
    }, 5000)
  }

  return (
    <div className="lg:col-span-3 flex flex-col gap-1">
      {cartItems.map(item => (
        <section
          className="grid lg:grid-cols-6 py-5 px-8 bg-white rounded-lg shadow-md gap-4 min-h-52"
          key={item.product_id}
        >
          <img
            src={item.image}
            className={`object-contain place-self-center ${removingItem.id === item.product_id && 'opacity-50'}`}
            alt={item.name}
          />
          <div className="lg:col-start-2 lg:col-span-4 flex flex-col justify-between">
            <p
              className={`font-bold text-lg ${removingItem.id === item.product_id && 'opacity-50'}`}
            >
              {item.name}
            </p>
            <p
              className={`text-sm text-slate-600 ${removingItem.id === item.product_id && 'opacity-50'}`}
            >
              {en.cart.deliveryTime}
            </p>
            <AddToCartButton
              product={item}
              isItemRemoving={removingItem}
              setRemovingItem={setRemovingItem}
            />
          </div>
          <div className="flex justify-end items-start">
            <button onClick={() => handleRemoveItemClick(item.product_id)}>
              <TfiClose
                className={`text-slate-400 hover:text-slate-500 text-xl transition ${removingItem.id === item.product_id && 'invisible'}`}
              />
            </button>
          </div>
        </section>
      ))}
    </div>
  )
}
