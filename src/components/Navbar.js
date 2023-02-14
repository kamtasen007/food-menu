import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul style={{ display: "flex", padding: "10px 25px", listStyle: "none" }}>
        <li style={{ margin: "0px 10px" }}><Link to="/Login">Login</Link></li>
        <li style={{ margin: "0px 10px" }}><Link to="/SignUp">SignUP</Link></li>
        <li style={{ margin: "0px 10px" }}><Link to="/home">Home</Link></li>
        <li style={{ margin: "0px 10px" }}><Link to="/menu">Menu</Link></li>
        <li style={{ margin: "0px 10px" }}><Link to="/Cart">Cart</Link></li>
        <li style={{ margin: "0px 10px" }}><Link to="/Checkout">Checkout</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
