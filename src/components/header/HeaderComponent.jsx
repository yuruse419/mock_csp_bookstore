import React from "react"
import '../../css/header/HeaderComponent.css'

class HeaderComponent extends React.Component {
  render() {
    return (
      <header id='page-header'>
        <h1 id='page-h1'>Mock Bookstore</h1>
      </header>
    )
  }
}

export default HeaderComponent