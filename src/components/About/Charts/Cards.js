import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './Cards.css'

function Cards() {
  return (
    <div>
               <div className="container context">
                                <p>The Amazing scenario which is set to be happening in coming years</p>
                                India is set to become the third-largest online retail market globally, after US and China, clocking $350 billion in GMV by 2030

                            </div>
                        <div className="row">
                           
                            <div className="col-lg card">
                                <p className="p1">500,000</p>
                                <p className="p2">Total gig workers expected to be employed(2021)</p>
                            </div>
                            <div className="col-lg card">
                           
                                <p className="p1">$800 bn</p>
                                <p className="p2">Size of India's Digital Economy(2030)</p>
                            
                            </div>
                            <div className="col-lg card">
                              
                            <p className="p1">$1.5 trillion</p>
                                <p className="p2">Total sales expected to be clocked by kiranas(2030)</p>
                            
                            </div>
                            <div className="col-lg card">
                              
                            <p className="p1">$150 bn</p>
                                <p className="p2">GMV contribution of small-town shoppers on e-commerce(2020-2030)</p>
                            
                            </div>
                        </div>
                    
                </div>
  )
}

export default Cards