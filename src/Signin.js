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
    const initialValues= {email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [user,setUser]=useState(initialValues)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(true);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      setUser({...user,[name]: value})
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
     const {email, password} = user;
     const res = await fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,password
      })
     });
     const data = await res.json();
     console.log(data)
     if(data){
      Swal.fire(
        'Signin Successful',
      // window.alert("Registration Successful")
      navigate("/dashboard")
      );
      // window.alert("invailid use")
    } 

     else{
      Swal.fire(
        'invalid data',
      // window.alert("Registration Successful")
      // navigate("/dashboard")
        
      // window.alert("Registration Successful")

    )}
    }

    
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const result = regex.test(values.mail)
      
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (result.error) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
   return(  
    <>
      <div className="myContainer">
      <div className="myForm">
      <div className="form-container sign-in-container">
            <form id="logged">
                <h1>Sign in</h1>
                <span>or use your account</span>
                <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="text" name="logget"  placeholder="Password" style={{display:"none"}} value={formValues.password} onChange={handleChange}/>
              
                <input type="submit" name="submit" onClick={handleSubmit} />
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
export default Signin;