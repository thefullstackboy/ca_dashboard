import React from 'react'
import {Link } from "react-router-dom";
import './form.css';
import { useForm } from "react-hook-form";
const apiUrl = process.env.REACT_APP_LOGIN_URL;

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {     
    try {
      const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: data.Email, password:data.password }),
      });

      if (response.ok) {
        // Login was successful, handle the response accordingly
        //const data = await response.json();
        alert("login successful");
      } else {
        // Handle login error here
        alert('email id and password not match');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  return (
    <> 
    <div class="login-box">
  <form onSubmit={handleSubmit(onSubmit)}>
  <h2 className='text-center text-dark'>Login</h2>
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
  <div class="text-center">
  <button type="submit" class="btn btn-primary mt-3">Login</button>
</div>
<p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/forgot-password">Forgot your password</Link></p>


</form>
</div>
<div className='login-box2'>   
    <p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/register">Don't  have a account, Create here Register</Link></p>  
</div>


    </>
  )
}

export default Login