import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = (props) => {
  return (
    <>


    <div>
      <div className="container">
        <h1>
        <Link to="/Signup" >Signup</Link>
         
        </h1>
        <br />
        <h1>
          <Link to="/Login" >Login</Link>
        </h1>
      </div>
      <br />
      <br />
      <br />

      <h1>{props.name ? `Welcome  - ${props.name}`: "Login please"}</h1>
    </div>
   {/* <div >
      <div className='container'>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div> */}
    </>
  )
}

export default Home







// sanjay gupta 