import React from 'react'
import LoginHeader from '../component/header/LoginHeader'
import Login from '../component/main/Login'
import Footer from '../component/footer/Footer'

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <LoginHeader></LoginHeader>
        <Login></Login>
        <Footer></Footer>
      </>
    )
  }
}

export default LoginPage