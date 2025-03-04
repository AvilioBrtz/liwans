import React, { useState } from 'react'
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import './loginSignup.css'

const LoginSignUp = ({setShow}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [state, setState] = useState("Sign Up")
    const [inputs, setInputs] = useState({
        name:"",
        email: "",
        password: "",
      })

      const handleActionChange = (newAction) =>{
        setState(newAction)
      }

  return (
    <div className='form-container'>
      <div className="times-form" onClick={()=> setShow(false)}>
        <FaTimes size={35} color='white'/>
      </div>
      <div className="form-wrapper">
        <h1>{state}</h1>
        <div className="input-wrapper">
            {state === "Login" ? <></> : <input
            type='text'
            placeholder='Your Name'
            value={inputs.name}
            onChange={(e) => setInputs({...inputs, name: e.target.value})}
            required
            />}
            <input 
            type="text" 
            placeholder='Email Adress *'
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value})}
            required
            />
            <div className="pass-input">
                <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password*" 
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                required
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} size={20} className='eye-icon'/>
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} size={20} className='eye-icon'/>
                )}
            </div>
        </div>
        {state === "Sign Up" 
        ?<div className='change-link'>
          <p>Already have an account? <span onClick={() => handleActionChange("Login")}>Click Here!</span></p>
        </div>
        :<div className='change-link'>
          <p>Create an account? <span onClick={() => handleActionChange("Sign Up")}>Click Here!</span></p>
        </div>}
        <div className="submit-btn"><button>{state}</button></div>
      </div>
    </div>
  )
}

export default LoginSignUp
