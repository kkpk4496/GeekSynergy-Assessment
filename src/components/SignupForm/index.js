import {Component} from 'react'
import './index.css'

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone: '',
    profession: 'Software Engineer',
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhone = event => {
    this.setState({phone: event.target.value})
  }

  onChangeProfession = event => {
    this.setState({profession: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Enter Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          Name
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Enter Name"
        />
      </>
    )
  }

  renderProfessionField = () => {
    const {profession} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          Profession
        </label>
        <select
          type="select"
          id="username"
          className="username-input-field"
          value={profession}
          onChange={this.onChangeProfession}
        >
          <option>Software Engineer</option>
          <option>Student</option>
          <option>Freelancer</option>
          <option>Other</option>
        </select>
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          Email
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

  renderPhoneField = () => {
    const {phone} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          Phone Number
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={phone}
          onChange={this.onChangePhone}
          placeholder="Enter Phone Number"
        />
      </>
    )
  }

  submitForm = event => {
    const {history} = this.props
    event.preventDefault()
    const {username, password, email, phone, profession} = this.state
    const userDetails = {username, password, email, phone, profession}
    if (
      username !== '' &&
      password !== '' &&
      email !== '' &&
      phone !== '' &&
      profession !== ''
    ) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails))
      history.replace('/login')
    } else {
      this.setState({showSubmitError: true})
    }
  }

  signin = () => {
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {showSubmitError} = this.state
    return (
      <form className="main-container" onSubmit={this.submitForm}>
        <img
          className="signup-img"
          src="https://wallpapercave.com/wp/wp6350592.jpg"
          alt="signup"
        />
        <div className="signup-container">
          <h1>Signup Page</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPhoneField()}</div>
          <div className="input-container">{this.renderProfessionField()}</div>
          {showSubmitError ? (
            <p className="error-message">*All Fields are Required</p>
          ) : (
            ''
          )}
          <button type="submit" className="button">
            Sign Up
          </button>
          <p className="para">Already Registered?</p>
          <button type="button" onClick={this.signin} className="button signin">
            Sign In
          </button>
        </div>
      </form>
    )
  }
}

export default SignupForm
