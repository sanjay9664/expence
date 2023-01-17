// import React, { useState } from "react";
import style from "./Signup.module.css"
import InputControl from "../InputControl/InputControl";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {auth} from "../../firebase"
// import { async } from "@firebase/util";
const Signup = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [error, setError] = useState("");

  const[submitdisable , setSubmitdisable] = useState(false)

  const handelSubmmision = () => {
    if (!value.name || !value.email || !value.pass) {
      setError("Please fill all feilds ");
      return;
    }
    setError("")
    setSubmitdisable(true)
    createUserWithEmailAndPassword(auth,value.email,value.pass).then(async(res)=>{
      const user = res.user 
     await updateProfile(user,{
        displayName:value.name
      })
      navigate("/")
      setSubmitdisable(false)
    }).catch((err)=>{
      setSubmitdisable(false)
      setError(err.message)
    })
  };
  return (
    <div className={style.container}>
      <div className={style.innerBox}>
        <h1 className={style.heading}>Signup</h1>
        <InputControl
          type="text"
          label="Name"
          placeholder="Enter your Name"
          onChange={(event) =>
            setValue((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          type="text"
          label="Email"
          placeholder="Enter your Email"
          onChange={(event) =>
            setValue((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          type="text"
          label="Password"
          placeholder="Enter your Password"
          onChange={(event) =>
            setValue((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <b className={style.footer}>{error}</b>
        <div className={style.footer}>
          <button onClick={handelSubmmision} disabled={submitdisable}>Login</button>
          <p>
            Already you have a account ?{" "}
            <span>
              {" "}
              <Link to="/Login">Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
