import React, { useState, useEffect } from 'react';
import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL;

export default function () {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>  
          <nav class="navbar sticky-top navbar-light bg-color border border-end border-secondary">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">aapkaCA</span>
            </div>
          </nav>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3 col-lg-2 col-sm-12 col-xl-2 mt-5'>
                  <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Services</li>
                    <li class="list-group-item mt-3">Leads</li>
                    <li class="list-group-item mt-3">Sales</li>
                  </ul>
              </div> 

              <div className='col-md-9 mt-3'>
       
                {data.map(item => (
                  <>
                         <label class="container">
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>
                <span className='border border-primary box'>
          <p key={item.id}>{item.service_name}</p>   
          <input type='number' value={item.price} />         
          </span>
          <button type="button" class="btn btn-primary">Update</button> 
                  </>

        ))}
               
               
              </div>
            </div>   
          </div>     
    </div>
  )
}
