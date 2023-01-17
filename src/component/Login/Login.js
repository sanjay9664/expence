import React, { useState } from 'react'
import style from "./Login.module.css"
import InputControl from '../InputControl/InputControl'
import { Link ,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase"
// import { async } from '@firebase/util'
const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:"",
    pass:""
  })

  const[error, setError] = useState("")
 

  const SubinationHandler =()=>{
    if(!data.email||!data.pass){
      setError("please fill the all feilds")
      return;
    }
     setError("")
     signInWithEmailAndPassword(auth,data.email,data.pass).then(async(res)=>{
   
      navigate("/")
      alert("You are successfull erolled")
     }).catch((err)=>{
      setError(err.message)
     })
  }
  
  return (
    <div className={style.container}>
      <div className={style.innerBox}>
        <h1 className={style.heading}>Login</h1>
        <InputControl type="text" label="Email" onChange={(event)=>setData((prev)=>({...prev,email:event.target.value}))}  placeholder="Enter your Email"  />
        <InputControl type="text" label="Password" onChange={(event)=>setData((prev)=>({...prev,pass:event.target.value}))}  placeholder="Enter your Password"  />
        <div className={style.footer}>
        <b>{error}</b>
        <button onClick={SubinationHandler}>Login</button>
        <p>Already you have a account ? <span> <Link to="/Signup">Signup</Link></span></p>
      </div>
      </div>
     
    </div>
  )
}

export default Login
