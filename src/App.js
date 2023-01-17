
import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from './component/Home/Home';
import Signup from './component/Signup/Signup';
import Login from "./component/Login/Login"
import { useEffect, useState } from 'react';
import { auth } from './firebase';
function App() {
  const[userName, setUserName] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }
      else setUserName("")
    })
  })


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home name={userName}/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
