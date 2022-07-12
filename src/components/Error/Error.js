import React from 'react'
import {NavLink} from 'react-router-dom'
import './error.css'
function Error() {
  return (
    <div>
        <div className='container mt-5' style={{height:"100vh"}}>
            <div className='row mt-5 p-1' style={{textAlign:"center"}}>
                <h1 style={{fontWeight:"500",fontSize:"300px",opacity:"0.6"}}>404</h1>
                <p style={{fontSize:"20px"}}>Page not found</p>

               <NavLink className='nav' to='/simuverse' style={{textDecoration:"",color:"#fff"}}>Go to Home page</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Error