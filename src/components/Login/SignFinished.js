import React from 'react'
import './SignFinished.css'
import logo from '../../images/simuverseLog.png'
import tick from '../../images/SignTick.png'
function SignFinished() {
  return (
   
        <>
         <div className='row text-start'>
             <img src={logo} alt="logo" className='img-fluid logo-simu'/></div>
        <div className='container'>
            <div className='row text-center'>
                <h1 className='finishedHead'>
                 Great! everything is ready
                </h1>
                </div>
            <div className='row'
            style={{
                textAlign:"center"
            }}
            >
                <img src={tick} alt="tick" className='img-fluid tickHW'/>
                </div>
            <div className='row'>
                <button className=' btnHW'>Go to Home Page</button>
            </div>
        </div>
        </>
   
  )
}

export default SignFinished