import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const itemsCount = cartList.length
      let cartAmount = 0
      cartList.forEach(product => {
        cartAmount += product.quantity * product.price
      })

      return (
        <div className="cart-summary-container">
          <div className="cart-summary-text-container">
            <h1 className="cart-summary-title">
              Order Total:{' '}
              <span className="cart-summary-price">Rs {cartAmount}/-</span>
            </h1>
            <p className="cart-summary-items">{itemsCount} Items in cart</p>
          </div>
          <button type="button" className="cart-summary-checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
