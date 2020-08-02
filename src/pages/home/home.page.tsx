import React, { useEffect } from 'react'
import { Box, Button } from '@material-ui/core'
import ProductTable from '../../components/product-table/product-table.component'
import { Product, CartItem, TotalSum } from '../../lib/types/common.type'
import CheckoutPanel from '../../components/checkout-panel/checkout-panel.component'

export default function HomePage(props: {
  products: Product[]
  cartItems: CartItem[]
  totalSum?: TotalSum
  loadingState?: string
  onRetrieveProducts: () => void
  onUpdateCartItem: (item: CartItem) => void
  onCheckout: (items: CartItem[]) => void
}) {
  const { products, cartItems, totalSum, loadingState, onRetrieveProducts, onUpdateCartItem, onCheckout } = props

  const handleCheckout = () => onCheckout(cartItems)

  useEffect(() => {
    if (products.length === 0) onRetrieveProducts()
  })

  useEffect(() => {
    const keydownListener = (ev: KeyboardEvent) => {
      if (ev.keyCode === 13) handleCheckout()
    }
    window.addEventListener('keydown', keydownListener)
    return () => window.removeEventListener('keydown', keydownListener)
  })

  return (
    <Box mt={5}>
      <h2>Welcome to Amazing Store</h2>
      <p>
        Enter the quantity for an item and press ENTER. You can also use the UP and DOWN arrow keys to spin up or down.
      </p>
      <ProductTable products={products} cartItems={cartItems} onUpdateCartItem={onUpdateCartItem} />
      <Box mt={2} style={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: 200 }}
          disabled={loadingState !== undefined}
          onClick={handleCheckout}
        >
          {loadingState || 'Calculate Total'}
        </Button>
      </Box>
      {totalSum && (
        <Box mt={3} p={2}>
          <CheckoutPanel totalSum={totalSum} />
        </Box>
      )}
    </Box>
  )
}
