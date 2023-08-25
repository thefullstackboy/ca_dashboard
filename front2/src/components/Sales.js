import React from 'react'
import Navbar from './Navbar'
import leadsData from './LeadsData'
import {Link } from "react-router-dom";

function Sales() {
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
                    leadsData.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe2'  key={index.pk}>{index.fields.email}</p>
                            </>
                        )
                    })
                }                  
            </div>
            <div className='col-md-2 col-lg-2 col-sm-2 col-xl-2 mt-5 '>
            {
                    leadsData.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe2' key={index.pk}>{index.fields.service_name}</p>
                            </>
                        )
                    })
                }    
            </div>
            <div className='col-md-2 col-lg-2 col-sm-2 col-xl-2 mt-5'>
            {
                    leadsData.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe2'  key={index.pk}>{index.fields.lead_at}</p>
                            </>
                        )
                    })
                }    
            </div>  
            <div className='col-md-2 col-lg-2 col-sm-2 col-xl-2 mt-5'>
            {
                    leadsData.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe3 text-center'  key={index.pk}>{index.fields.status}</p>
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