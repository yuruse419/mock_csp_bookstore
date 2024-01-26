import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/main/LoginComponent.css'
import AuthContext from '../../contexts/AuthContext'

const LoginComponent = () => {
  const { username, setUsername, password, setPassword } = useContext(AuthContext)

  const navigate = useNavigate()

  // username state setter
  const handleUsernameOnChange = (e) => {
    setUsername(e.target.value)
  }

  // password state setter
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLoginOnClick = (e) => {
    navigate('/category/apparel')
  }

    return (
    // login main
    <main id='login-main'>
      {/* authentication form */}
      <form id='login-form'>
        {/* authentication fieldset */}
        <fieldset id='login-authenticate-fieldset'>
          <legend>Authenticate</legend>

          {/* username input */}
          <label hidden htmlFor='username-input'></label>
          <input id='username-input' placeholder='username' value={ username } onChange={ handleUsernameOnChange }></input>

          {/* password input */}
          <label hidden htmlFor='password-input'></label>
          <input id='password-input' type='password' placeholder='password' value={ password } onChange={ handlePasswordOnChange }></input>
        </fieldset>

        {/* submit fieldset */}
        <fieldset id='login-submit-fieldset'>
          <legend>Submit</legend>

          {/* register button */}
          <input id='register-button' type='submit' value='Register'></input>
          <label hidden htmlFor='register-button'></label>

          {/* login button */}
          <input id='submit-button' type='submit' value='Login' onClick={ handleLoginOnClick }></input>
          <label hidden htmlFor='submit-button'></label>
        </fieldset>
      </form>
     </main>
  )
}

export default LoginComponent