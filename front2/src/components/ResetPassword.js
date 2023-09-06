import React from 'react'
import {Link } from "react-router-dom";
import './form.css';



function ResetPassword() {
  return (
    <>
    <div class="login-box">
    <form>   
    <h2 className='text-center text-dark'>Reset Password</h2>
    <div class="mb-3">    
      <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='New Password'/>
    </div>
    <div class="mb-3">  
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Confirm Password'/>
    </div>
    <div class="text-center">
    <button type="button" class="btn btn-primary mt-3">Reset Password</button>
  </div>
  </form>
  </div>
    <div className='login-box2'>   
    <p className='text-center btn-primary fs-6 list-group-item'><Link to="/login">Already have an account, Login here</Link></p>  
</div>
</>
  )
}

export default ResetPassword