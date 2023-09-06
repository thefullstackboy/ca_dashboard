import React from 'react'
import {Link } from "react-router-dom";

function Register() {
  return (
    <div>
            <div class="login-box">
  <form>
  <h2 className='text-center text-dark'>Register</h2>
  <div class="mb-3">    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'/>
  </div>
  <div class="mb-3">  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='password'/>
  </div>

  <div class="mb-3">  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='confirm password'/>
  </div>
  <div class="text-center">
  <button type="button" class="btn btn-primary mt-3">Register</button>
</div>
</form>
</div>
<div className='login-box2'>   
    <p className='text-center btn-primary fs-6 mt-3 list-group-item'><Link to="/login">Already have an account, Login here</Link></p>  
</div>
    </div>
  )
}

export default Register