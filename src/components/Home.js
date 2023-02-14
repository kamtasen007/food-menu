import React from 'react'

const Home = () => {
  return (
    <div style={{height:"100vh"}}>
   
      <h4 style={{ backgroundColor: "rgb(65, 95, 183)", color: "white", display: "flex", alignItems: "center", height: "50px" }} >Food's Resturant</h4>
      <p style={{ fontSize: "50px", display: "flex", justifyContent: "center", marginTop: "76px" }}>Welcome to our Food's </p>
      <br />
      <br />
      <p style={{ fontSize: "50px", display: "flex", justifyContent: "center" }}>Kitchen</p>

      <br />
      <br />
      <div className='btn'>
        <button style={{ position: "absolute", left: "47%", backgroundColor: "rgb(65, 95, 183", color: "white" }}>Go to Menu</button>
      </div>

     
    </div>
  )
}

export default Home
