import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true})
  }

  submitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    if (userDetails !== null) {
      if (
        userDetails.username === username &&
        userDetails.password === password
      ) {
        const {history} = this.props
        history.replace('/')
      }
    } else {
      this.onSubmitFailure()
    }
  }

  signup = () => {
    const {history} = this.props
    history.replace('/signup')
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError} = this.state
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="company">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.eQE9ydVqKyf5Psgs30n24gHaHZ&pid=Api&P=0&h=180"
              className="login-image"
              alt="website login"
            />
            <h1 className="title">GeekSynergy</h1>
          </div>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          {showSubmitError ? (
            <p className="error-message">*Invalid Credentials</p>
          ) : (
            ''
          )}
          <div className="button-container">
            <button type="submit" className="login-button">
              Login
            </button>
            <button
              type="button"
              onClick={this.signup}
              className="login-button signup"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
