import React from 'react'
import '../../css/main/LoginComponent.css'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this)
    this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this)
  }

  handleUsernameOnChange(e) {
    this.setState({ username: e.target.value })
  }

  handlePasswordOnChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return(
      <main id='login-main'>
        <form id='login-form'>
          <fieldset id='login-authenticate-fieldset'>
            <legend>Authenticate</legend>

            <label hidden htmlFor='username-input'></label>
            <input id='username-input' placeholder='username' onChange={ this.handleUsernameOnChange }></input>

            <label hidden htmlFor='password-input'></label>
            <input id='password-input' placeholder='password' onChange={ this.handlePasswordOnChange }></input>
          </fieldset>

          <fieldset id='login-submit-fieldset'>
            <legend>Submit</legend>

            <input id='register-button' type='button' value='Register'></input>
            <label hidden htmlFor='register-button'></label>

            <input id='submit-button' type='submit' value='Login'></input>
            <label hidden htmlFor='submit-button'></label>
          </fieldset>
        </form>
      </main>
    )
  }
}

export default LoginComponent