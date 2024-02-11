import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setPassword } from '../../redux/slice/authSlice'
import '../../css/main/Login.css'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { username, password } = useSelector((state) => state.auth)

  const handleUsernameOnChange = (e) => {
    dispatch(setUsername(e.target.value))
  }

  const handlePasswordOnChange = (e) => {
    dispatch(setPassword(e.target.value))
  }

  const handleLoginOnClick = (e) => {
    e.preventDefault()

    navigate('/apparel')
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

export default Login