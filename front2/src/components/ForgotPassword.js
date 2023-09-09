import React from 'react'
import {Link } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";
import './form.css';

function ForgotPassword() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {     
    try {   

      axios.post("http://localhost:3001/api/services/forgotpassword",
        {
          email: data.Email,                     
        }).then((response)=>{
          alert("Email send")
          console.log("response28",response);
          console.log("respone status",response.status)             
        }).catch((error) => { // error is handled in catch block
          if (error.response) { // status code out of the range of 2xx
            alert(error.response.data);           
          } else if (error.request) { // The request was made but no response was received
            console.log(error.request);
          } else {// Error on setting up the request
            console.log('Error', error.message);
          }
        });    
    } catch (e) {
      console.log(e.response.message)
      console.log(e)
    }  
  } 
  return (
    <div>
            <div class="login-box">
            <form onSubmit={handleSubmit(onSubmit)}>
  <h2 className='text-center text-dark'>Forgot Password</h2> 
  <div class="mb-3">    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'
       {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}    
    />
      {errors.Email && <p className='text-danger'>* Please check the email id.</p>}
  </div>
  {/* <div class="mb-3">  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='OTP'/>
  </div> */}
  <div class="text-center">
 
  <button type="submit" class="btn btn-primary mt-3">Reset Password</button>
  
</div>
</form>
</div>
<div className='login-box2 mt-2'>   
    <p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/login">Already have an account, Login here</Link></p>  
</div>

    </div>
  )
}

export default ForgotPassword