import React from 'react'
import Navbar from './Navbar'
import leadsData from './LeadsData'
import {Link } from "react-router-dom";

function Leads() {
  return (
    <div>
        <Navbar/>
        <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3 col-lg-2 col-sm-12 col-xl-2 mt-5'>
                  <ul class="list-group">
                    <Link className="list-group-item" aria-current="true" to="/">Services</Link>
                    <li className="list-group-item mt-3 poco text-white">Leads</li>
                    <li className="list-group-item mt-3">Sales</li>
                  </ul>
              </div> 
            
            <div className='col-md-3 col-lg-3 col-sm-3 col-xl-3 mt-5  '>
                {
                    leadsData.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe'  key={index.pk}>{index.fields.email}</p>
                            </>
                        )
                    })
                }                  
            </div>
            <div className='col-md-3 col-lg-3 col-sm-3 col-xl-3 mt-5 '>
            {
                    leadsData.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe' key={index.pk}>{index.fields.service_name}</p>
                            </>
                        )
                    })
                }    
            </div>
            <div className='col-md-3 col-lg-3 col-sm-3 col-xl-3 mt-5 '>
            {
                    leadsData.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe'  key={index.pk}>{index.fields.lead_at}</p>
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

export default Leads