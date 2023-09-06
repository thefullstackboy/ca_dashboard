import React from 'react'
import {Link } from "react-router-dom";
import './form.css';

function ForgotPassword() {
  return (
    <div>
            <div class="login-box">
  <form> 
  <h2 className='text-center text-dark'>Forgot Password</h2> 
  <div class="mb-3">    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Registered Email'/>
  </div>
  <div class="mb-3">  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='OTP'/>
  </div>
  <div class="text-center">
    <Link to="/resetpassword">
  <button type="button" class="btn btn-primary mt-3">Reset Password</button>
    </Link>
</div>
</form>
</div>
<div className='login-box2'>   
    <p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/login">Already have an account, Login here</Link></p>  
</div>

    </div>
  )
}

export default ForgotPassword