import React from 'react'

import { useCart } from 'react-use-cart'

const Itemcard = (props) => {
  
  const { addItem,removeItem,item} = useCart();




  return (


    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>

      <div className="card p-0 overflow-hidden h-100 shadow">

        <div className="card-body ">

          <img src={props.img} className="card-img-top img-fluid" alt="image" />
          <h5 className="card-title">{props.name}</h5>
          <h5 className="card-text"> {props.price}</h5>

          <button className='btn ' style={{ backgroundColor: "rgb(65, 95, 183)", width: "59px", color: "white" }} onClick={() => { addItem(props.item) }}><b>+</b></button>
          <button className="btn" style={{ width: "59px", color: "#0000002b", backgroundColor: "#e1d7c4e0", marginLeft: "20px" }} onClick={() => { removeItem(props.id) }}><b>-</b></button>
          
        </div>
      </div>
    </div>

  )
}

export default Itemcard
