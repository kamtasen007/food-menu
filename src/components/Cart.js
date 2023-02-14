import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const { isEmpty, items,cartTotal, updateItemQuantity,removeItem} = useCart();

    if (isEmpty) return <h1 className='text-center'>Your cart is Empty</h1>

    return (

        <section className='py-6 container'>

            <div className='row justify-content-center'>
                <div className='col-12'>

                    <table className='table table-light table-hover m-0'>
                    <p>Order Summary</p>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    
                                    <tr style={{ alignItems: "center" }} key={index}>



                                        
                                        <td>{item.name}</td>

                                        <td> {item.quantity}</td>
                                        <td>
                                            <button style={{ backgroundColor: " #d20884", width: "80px", color: "white", backgroundColor: " rgb(65, 95, 183)" }} className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><b>+</b></button>
                                            <button style={{ backgroundColor: " #d20884", width: "80px", color: "white" }} className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><b>-</b></button>
                                            
                                        </td>
                                    </tr>
                                )

                            })}

                        </tbody>
                        <div className='col-auto ms-auto'>
                            <p style={{ position: "absolute", right: "79%" }}>Total Price (INR) : {cartTotal}</p>
                        </div>
                    </table>

                </div>
                <div className='col-auto ms-auto'>
                    <button style={{ backgroundColor: " rgb(65, 95, 183)", color: "white", margin: "45px", width: "168px", height: "44px" }}>Save and Checkout</button>
                    <button style={{ border: "none", height: "37px", width: "69px", color: "rgb(65, 95, 183)" }}>cancle</button>
                </div>

            </div>
        </section>
    )

}

export default Cart
