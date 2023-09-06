import React from 'react'
import {Link } from "react-router-dom";
import './form.css';

function Login() {
  return (
    <> 
    <div class="login-box">
  <form>
  <h2 className='text-center text-dark'>Login</h2>
  <div class="mb-3">    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'/>
  </div>
  <div class="mb-3">  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='password'/>
  </div>
  <div class="text-center">
  <button type="button" class="btn btn-primary mt-3">Login</button>
</div>
<p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/forgotpassword">Forgot your password</Link></p>


</form>
</div>
<div className='login-box2'>   
    <p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/register">Don't  have a account, Create here Register</Link></p>  
</div>


    </>
  )
}

export default Login