import React from 'react'

export default function () {
  return (
    <div>  
          <nav class="navbar navbar-light bg-color border border-end border-secondary">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">aapkaCA</span>
            </div>
          </nav>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-2 col-lg-2 col-sm-12 col-xl-2 mt-3'>
              <ul class="list-group">
                 <li class="list-group-item active" aria-current="true">Services</li>
                 <li class="list-group-item mt-3">Leads</li>
                 <li class="list-group-item mt-3">Sales</li>
              </ul>
              </div> 
              
              <div className='col-md-10 col-lg-10 col-sm-12 col-xl-10 mt-3'>
              <table class="table">
                  <thead>
                    <tr>    
                      <th scope="col">Checkbox</th>
                      <th scope="col">Service Name</th>
                      <th scope="col">Price ₹</th>
                      <th scope="col">Update</th>
                    </tr>
                  </thead>
                      <tbody>
                        <tr>   
                          <td>
                          <form> 
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />   
                        </form>
                          </td>
                          <td>Otto</td>
                          <td>10</td>
                          <td>  <button type="button" class="btn btn-primary">Update</button></td>
                        </tr>   
                      </tbody>
                  </table>
              </div>      
            </div>
          </div>     
    </div>
  )
}
