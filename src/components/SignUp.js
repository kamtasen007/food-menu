import React from 'react'
import { useState } from 'react';



const SignUp = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isError, setIsError] = useState()

    const checkValidation = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass)
        if (password !== confirmPass) {
            setIsError("confirm password should be match with password")
        }
        else {
            setIsError("")
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='wrapper' style={{ position: "absolute", left: "40%", boxShadow: "0px 0px 5px gray" }}>
            <h1 style={{ marginBottom: "38px", marginLeft: "142px" }}>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input style={{ margin: "0px 105px" }} type="text" className="text" placeholder='Enter your email' />
                <br />
                <br />
                <label>Password</label>
                <input style={{ margin: "0px 78px" }} type="text" name='pass' className="text" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <label>Confirm Password</label>

                <input style={{ margin: "0px 20px" }} type="text" className="text" placeholder='Confirm password' value={confirmPassword} name="confirmPass" onChange={(e) => checkValidation(e)} />
                <div styles={{ color: "red" }}>
                    <span style={{color:"red"}}>{isError}</span>
                </div>
                <br />
                <br />
                <button style={{ marginLeft: "148px", width: "75px", backgroundColor: "rgb(34, 103, 208)", color: "white" }}>Sign Up</button>

            </form>
           

        </div>
    )
}

export default SignUp
