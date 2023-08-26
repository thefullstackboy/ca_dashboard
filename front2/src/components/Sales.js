import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Navbar'
import {Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_SALE_URL;

function Sales() {
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
        <Navbar/>
        <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3 col-lg-2 col-sm-12 col-xl-2 mt-5'>
                  <ul class="list-group">
                    <Link className="list-group-item" aria-current="true" to="/">Services</Link>
                    <Link className="list-group-item mt-3"to="/leads" >Leads</Link>
                    <li className="list-group-item mt-3 text-white poco">Sales</li>
                  </ul>
              </div> 
            
            <div className='col-md-2 col-lg-2 col-sm-2 col-xl-2 mt-5 '>
                {
                    data.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe2'  key={index.pk}>{index.email}</p>
                            </>
                        )
                    })
                }                  
            </div>
            <div className='col-md-2 col-lg-2 col-sm-2 col-xl-2 mt-5 '>
            {
                    data.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe2' key={index.pk}>{index.service_name}</p>
                            </>
                        )
                    })
                }    
            </div>
            <div className='col-md-2 col-lg-2 col-sm-2 col-xl-2 mt-5'>
            {
                    data.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe2'  key={index.pk}>{index.date}</p>
                            </>
                        )
                    })
                }    
            </div>  
            <div className='col-md-2 col-lg-2 col-sm-2 col-xl-2 mt-5'>
            {
                    data.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe3 text-center'  key={index.pk}>{index.status2}</p>
                            </>
                        )
                    })
                }    
            </div>           
            </div>
        </div>  
    </div>
  )
}

export default Sales