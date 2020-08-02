import React from 'react'
import { Product, CartItem } from '../../lib/types/common.type'
import { TextField, TableCell, TableContainer, Paper, Table, TableHead, TableRow, TableBody } from '@material-ui/core'
import './product-table.component.css'

export default function ProductTable(props: {
  products: Product[]
  cartItems: CartItem[]
  onUpdateCartItem: (item: CartItem) => void
}) {
  const { products, cartItems, onUpdateCartItem } = props

  const getCartItemQuantity = (productId: number): number => {
    const item = cartItems.find(ci => ci.productId === productId)
    return item ? item.quantity : 0
  }

  const handleQuantityChange = (id: string, value: string) => {
    const quantity = parseInt(value)
    if (!isNaN(quantity)) onUpdateCartItem({ productId: parseInt(id.substr(9)), quantity: quantity })
  }

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table aria-label="products table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Promotions</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={'product-' + product.id}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell>
                <ul className="product-table-list">
                  {product.promotions.map(prom => (
                    <li key={'promotion-' + prom.id}>{prom.description}</li>
                  ))}
                </ul>
              </TableCell>
              <TableCell align="right">${product.unitPrice}</TableCell>
              <TableCell align="right">
                <TextField
                  id={'quantity-' + product.id}
                  type="number"
                  variant="outlined"
                  size="small"
                  style={{ width: 100 }}
                  value={getCartItemQuantity(product.id)}
                  onChange={(e: any) => handleQuantityChange(e.currentTarget.id, e.currentTarget.value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
