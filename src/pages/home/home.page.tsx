import React, { useEffect, Fragment } from 'react'
import { Box, Button, Divider } from '@material-ui/core'
import ProductTable from '../../components/product-table/product-table.component'
import { Product, CartItem, TotalSum } from '../../lib/types/common.type'
import CheckoutPanel from '../../components/checkout-panel/checkout-panel.component'

export default function HomePage(props: {
  products: Product[]
  cartItems: CartItem[]
  totalSum?: TotalSum
  onRetrieveProducts: () => void
  onUpdateCartItem: (item: CartItem) => void
  onCheckout: (items: CartItem[]) => void
}) {
  const { products, cartItems, totalSum, onRetrieveProducts, onUpdateCartItem, onCheckout } = props

  const handleCheckout = () => onCheckout(cartItems)

  useEffect(() => {
    if (products.length === 0) onRetrieveProducts()
  })

  return (
    <Box mt={5}>
      <h2>Welcome to Amazing Store</h2>
      <ProductTable products={products} cartItems={cartItems} onUpdateCartItem={onUpdateCartItem} />
      <Box mt={2} style={{ textAlign: 'right' }}>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Calculate Total
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
