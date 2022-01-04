import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  // decrement cart item quantity
  decrementCartItemQuantity = (id, quantity) => {
    if (quantity === 1) {
      this.removeCartItem(id)
    } else {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(product => {
          if (product.id !== id) {
            return product
          }
          return {...product, quantity: product.quantity - 1}
        }),
      }))
    }
  }

  // increment cart item quantity
  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(product => {
        if (product.id !== id) {
          return product
        }
        return {...product, quantity: product.quantity + 1}
      }),
    }))
  }

  // remove all cart items
  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  // remove cart item
  removeCartItem = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(product => product.id !== id),
    }))
  }

  // add cart item
  addCartItem = product => {
    const {cartList} = this.state
    const existingProduct = cartList.find(
      eachProduct => eachProduct.id === product.id,
    )
    if (existingProduct === undefined) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    } else {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachProduct => {
          if (eachProduct === existingProduct) {
            return {
              ...eachProduct,
              quantity: eachProduct.quantity + product.quantity,
            }
          }
          return eachProduct
        }),
      }))
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
