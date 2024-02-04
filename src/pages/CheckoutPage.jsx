import React from 'react'
import HeaderComponent from '../components/header/HeaderComponent'
import CheckoutComponent from '../components/main/CheckoutComponent'
import FooterComponent from '../components/footer/FooterComponent'

const CheckoutPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <CheckoutComponent></CheckoutComponent>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default CheckoutPage