import { connect } from 'react-redux'
import { RootState } from '../../store'
import { retrieveProducts, updateCartItem, calculateTotal } from '../../store/slices/app.slice'
import HomePage from './home.page'
import { CartItem } from '../../lib/types/common.type'

const mapDispatch = (dispatch: any) => ({
  onRetrieveProducts: () => dispatch(retrieveProducts(undefined)),
  onUpdateCartItem: (item: CartItem) => dispatch(updateCartItem(item)),
  onCheckout: (items: CartItem[]) => dispatch(calculateTotal(items))
})

const mapState = (state: RootState) => ({
  products: state.appReducer.products,
  cartItems: state.appReducer.cartItems,
  totalSum: state.appReducer.totalSum
})

export default connect(mapState, mapDispatch)(HomePage)
