import React from 'react'
import { useState } from 'react'

import Validation from './Validation'

const Login = () => {
  const [value, setValues] = useState({
    name: "",
    password: ""
  })
  const [error, setError] = useState({})

  function handleChange(e) {
    setValues({ ...value, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(Validation(value))
  }


  return (
    <div className='app' style={{ position: "absolute", left: "40%", boxShadow: "0px 0px 5px gray" }}>
      <h1 style={{ marginLeft: "115px", marginTop: "50px" }}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" style={{ margin: "14px", marginLeft: "46px" }} className="text" placeholder='Enter your email' value={value.name} name="name" onChange={handleChange} />
        {error.name && <p style={{ color: "red", fontSize: "13px" }}>{error.name}</p>}
        <br />
        <br />
        <label>Password</label>
        <input type="text" style={{ margin: "21px" }} className="text" id='text' placeholder='Enter your password' name="password" value={value.password} onChange={handleChange} />
        {error.password && <p style={{ color: "red", fontSize: "13px" }}>{error.password}</p>}
        <br />
        <br />
        <button style={{ marginLeft: "91px", width: "75px", backgroundColor: "rgb(34, 103, 208)", color: "white" }}>Login</button>

        <p style={{ margin: "40px 150px", color: "blue" }}>Create new Account</p>
      </form>
     

    </div>
  )
}

export default Login
