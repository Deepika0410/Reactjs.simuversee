import React from 'react';
import './sec4.css';
import brand from '../../images/brand.png';

    function Sec4()
    {
        return(
            <div className='container-fluid rw-brand'>
                <div className='row'>
                    <div class="col hl1">
                        Brands
                    </div>
                    
                </div>
                <div className='row justify-content-center'>
                    <div class="col-sm-6" style={{maxWidth:"600px"}}>
                        <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth:"150px"}}>
                             <img class="img-fluid" src={brand} />
                        <p class="b_name" >Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                         <div class="col-sm"  align="center" style={{minWidth:"150px"}} >
                             <img class="img-fluid" src={brand} />
                             <p class="b_name">Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                        </div>
                   
                    </div>
                    
                     <div class="col-sm-6" style={{maxWidth:"600px"}}>
                        <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth:"150px"}}>
                             <img class="img-fluid" src={brand} />
                        <p class="b_name" >Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                         <div class="col-sm"  align="center" style={{minWidth:"150px"}} >
                             <img class="img-fluid" src={brand} />
                             <p class="b_name">Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                        </div>
                   
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div class="col-sm-6" style={{maxWidth:"600px"}}>
                        <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth:"150px"}}>
                             <img class="img-fluid" src={brand} />
                        <p class="b_name" >Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                         <div class="col-sm"  align="center" style={{minWidth:"150px"}} >
                             <img class="img-fluid" src={brand} />
                             <p class="b_name">Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                        </div>
                   
                    </div>
                    
                     <div class="col-sm-6" style={{maxWidth:"600px"}}>
                        <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth:"150px"}}>
                             <img class="img-fluid" src={brand} />
                        <p class="b_name" >Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                         <div class="col-sm"  align="center" style={{minWidth:"150px"}} >
                             <img class="img-fluid" src={brand} />
                             <p class="b_name">Brand Name</p>
                        <p class="b_offer" >Offer %</p>
                         </div>
                        </div>
                   
                    </div>
                </div>
               
            </div>
            )
    }

    export default Sec4