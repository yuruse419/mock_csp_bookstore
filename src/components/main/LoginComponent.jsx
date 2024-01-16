import React from 'react'
import '../../css/main/LoginComponent.css'

class LoginComponent extends React.Component {
  // LoginComponent constructor
  constructor(props) {
    super(props)

    // create username and password states
    this.state = {
      username: '',
      password: ''
    }
  }

  /* 
    arrow functions have no binding to the this keyword,
    so explicit binding is not required
    (i.e., this in an arrow function maintains its reference to the class instance)
  */

  // username state setter
  handleUsernameOnChange = (e) => {
    this.setState({ username: e.target.value })
  }

  // password state setter
  handlePasswordOnChange = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return(
      // login main
      <main id='login-main'>
        {/* authentication form */}
        <form id='login-form'>
          {/* authentication fieldset */}
          <fieldset id='login-authenticate-fieldset'>
            <legend>Authenticate</legend>

            {/* username input */}
            <label hidden htmlFor='username-input'></label>
            <input id='username-input' placeholder='username' onChange={ this.handleUsernameOnChange }></input>

            {/* password input */}
            <label hidden htmlFor='password-input'></label>
            <input id='password-input' placeholder='password' onChange={ this.handlePasswordOnChange }></input>
          </fieldset>

          {/* submit fieldset */}
          <fieldset id='login-submit-fieldset'>
            <legend>Submit</legend>

            {/* register button */}
            <input id='register-button' type='button' value='Register'></input>
            <label hidden htmlFor='register-button'></label>

            {/* login button */}
            <input id='submit-button' type='submit' value='Login'></input>
            <label hidden htmlFor='submit-button'></label>
          </fieldset>
        </form>
      </main>
    )
  }
}

export default LoginComponent