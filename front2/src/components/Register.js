import React from 'react'
import {Link } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {     
    try {   
      if(data.password === data.confirmPassword){
      axios.post("http://localhost:3001/api/services/register",
        {
          email: data.Email,          
          password:data.password       
        }).then((response)=>{
          alert("Account created successfully")
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
      } 
      else {
        alert("password and confirm password not match.")
      } 
    } catch (e) {
      console.log(e.response.message)
      console.log(e)
    }  
  }  
  return (
    <div>      
            <div class="login-box">
  <form onSubmit={handleSubmit(onSubmit)}>
  <h2 className='text-center text-dark'>Register</h2>
  <div class="mb-3">    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'
       {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}    
    />
      {errors.Email && <p className='text-danger'>* Please check the email id.</p>}
  </div>
  <div class="mb-3">  
    <input type="password" class="form-control"  placeholder='password'
      {...register("password",
      {required: true})}                               
    /> 
     {errors.password && <p className='text-danger'>* minimum one characters</p>}   
  </div>

  <div class="mb-3">  
    <input type="password" class="form-control"  placeholder='confirm password'
     {...register("confirmPassword",
     {required: true})} 
    />
     {errors.confirmPassword && <p className='text-danger'>* minimum one characters</p>}   
  </div>
  <div class="text-center">
  <button type="submit" class="btn btn-primary mt-3">Register</button>
</div>
</form>
</div>
<div className='login-box2 mt-4'>   
    <p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/login">Already have an account, Login here</Link></p>  
</div>
    </div>
  )
}

export default Register