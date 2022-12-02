import { useState, useEffect } from "react";
import React from "react";
import './App.css';
import Swal from "sweetalert2";
// import Profile from './image/user-icon.png';
// import email from './image/mail-icon.png';
// import pass from './image/password.png';
import {useNavigate} from 'react-router-dom'

function Signin() {
  const navigate = useNavigate();
  const [isFilled, setisFilled] = useState(false)
  const [userDetail, setUserDetail] = useState({
    email:'',
    pass:''
  })
    // const [email,setEmail] = useState('')
    // const [pass,setPass] = useState('')
   const handleChange =(e)=>{
   let key = e.target.name;
   let val = e.target.value
    setUserDetail((prev)=>({...prev,[key]:val}))

   }
    const handleSubmit = async(e) => {     
      e.preventDefault();         
     if(!userDetail.email && !userDetail.pass) {setisFilled(true); return} ;
     setisFilled(false)
     try{
      const data = {
        email:userDetail?.email,
        password:userDetail?.pass
      }

     const res = await fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
     });
     console.log("res",res)
     const result = await res.json();
     console.log(result)
     Swal.fire(
      'SignUp Sucessfull',)
    navigate("/dashboard")
     
    }catch(err) {
      if(404){
        Swal.fire(
          'invailid '
        )
      }
      else if(400){
        Swal.fire(
          'invailid Password'
        )
      }
      else{
        Swal.fire(
          'Password is require'
        )
      }
    }
    }
   
  console.log(userDetail)
   return(  
    <>
      <div className="myContainer">
      <div className="myForm">
      <div className="form-container sign-in-container">
            <form id="logged">
            {isFilled ? <small>fill all field</small> : null}
                <h1>Sign in</h1>
                <span>or use your account</span>
                <input type="text" name="email" placeholder="Email" value={userDetail.email} onChange={(e)=>{handleChange(e)}}/>
                <input type="password" name="pass"  placeholder="Password"  value={userDetail.pass} onChange={(e)=>{handleChange(e)}}/>
              
                <button style={{backgroundColor:'blue'}} disabled={isFilled} onClick={handleSubmit}>Sign In</button>
            </form>
        </div>
        <div class="overlay-panel overlay-right overlay">
                    <h1>Hello, Infolane!</h1>
                    <p>Enter your login details and start journey with us</p>
                    
                </div>
      </div>

      </div>
    </>
  )
  
}
export default Signin