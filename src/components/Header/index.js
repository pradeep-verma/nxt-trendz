import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="link-lg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="app-logo"
      />
      <ul className="links">
        <li className="link-item">Home</li>
        <li className="link-item">Products</li>
        <li className="link-item">Cart</li>
      </ul>
      <button type="button" className="logout-btn">
        Logout
      </button>
      <button type="button" className="logout-sm-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
          alt="nav logout"
          className="logout-icon"
        />
      </button>
    </div>
    <div className="link-sm-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        alt="nav home"
        className="link-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="link-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="link-icon"
      />
    </div>
  </nav>
)
export default Header
