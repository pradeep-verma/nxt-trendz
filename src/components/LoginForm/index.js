import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorText => {
    this.setState({errorMsg: errorText})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameInput = () => {
    const {username} = this.state
    return (
      <div className="form-input-container">
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          className="input-element"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state
    return (
      <div className="form-input-container">
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          className="input-element"
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {errorMsg} = this.state
    return (
      <div className="login-form-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image-lg"
        />
        <div className="login-content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image-sm"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {this.renderUsernameInput()}
            {this.renderPasswordInput()}
            <button type="submit" className="login-btn">
              Login
            </button>
            {errorMsg !== '' && <p className="error-msg">{`*${errorMsg}`}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
