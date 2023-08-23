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

          <div className='container-fluid border border-primary'>
            <div className='row'>
              <div className='col-md-3 col-lg-2 col-sm-12 col-xl-2 mt-5'>
              <ul class="list-group">
                 <li class="list-group-item active" aria-current="true">Services</li>
                 <li class="list-group-item mt-3">Leads</li>
                 <li class="list-group-item mt-3">Sales</li>
              </ul>
              </div> 

              <div className='col-md-1 col-lg-2 col-sm-12 col-xl-2 mt-3'>          
              <h6>Checkbox</h6>
              <label class="container text-center"><input type="checkbox"/>
                 <span class="checkmark"></span>
              </label>            
              </div> 

              <div className='col-md-5 col-lg-2 col-sm-12 col-xl-2 mt-3 '>          
              <h6>Service Name</h6>   
              {data.map(item => (
                <>
                
                 <p key={item.id} class="text-lowercase fs-5 mt-3">{item.service_name}</p>
                </>
        ))}        
              </div> 

              <div className='col-md-1 col-lg-2 col-sm-12 col-xl-2 mt-3'>          
              <h6>Price</h6>  
              {data.map(item => (
                <>                
                 <input key={item.id} class="text-lowercase fs mt-3" type="number" value={item.price}/>
                </>
        ))}
                    
              </div> 

              <div className='col-md-1 col-lg-2 col-sm-12 col-xl-2 mt-3'>          
              <h6>Update</h6>  
              <button type="button" class="btn btn-primary">Update</button>

                    
              </div> 
              
             
            </div>
          </div>     
    </div>
  )
}
