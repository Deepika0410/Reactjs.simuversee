import React from 'react';
import './sec4.css';
import brand from '../../images/brand.png';
import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import brand4 from '../../images/brand4.png';
import brand5 from '../../images/brand5.png';
import brand6 from '../../images/brand6.png';
import brand7 from '../../images/brand7.png';
import brand8 from '../../images/brand8.png';
function Sec4() {
    return (
        <div className='container-fluid rw-brand' >
            <div class="row justify-content-center" style={{display:"flex"}}>
                <div class="col-md-12 hl1 " style={{ textAlign: "center" }}> Brands </div>

                <div class="col-md-8 txt1">
                    Select your outfits from the variety of brands that SimuVerse provide.
                </div>
            </div>
            <div className='row justify-content-center'>
                <div class="col-sm-6" style={{ maxWidth: "600px" }}>
                    <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }}>
                            <img class="img-fluid" src={brand1} style={{width:"145px" , height:"145px"}}/>
                            <p class="b_name" style={{textAlign:"center"}} >CHANNEL</p>
                          
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }} >
                            <img class="img-fluid" src={brand2} style={{width:"145px" , height:"145px"}}/>
                            <p class="b_name" style={{textAlign:"center"}}>GUCCI</p>
                      
                        </div>
                    </div>

                </div>

                <div class="col-sm-6" style={{ maxWidth: "600px" }}>
                    <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }}>
                            <img class="img-fluid" src={brand3} style={{width:"145px" , height:"145px"}}/>
                            <p class="b_name" style={{textAlign:"center"}}>NIKE</p>
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }} >
                            <img class="img-fluid" src={brand4} style={{width:"145px" , height:"145px"}}/>
                            <p class="b_name" style={{textAlign:"center"}}>ADIDAS</p>
                        
                        </div>
                    </div>

                </div>
            </div>
            <div className='row justify-content-center' >
                <div class="col-sm-6" style={{ maxWidth: "600px" }}>
                    <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }}>
                            <img class="img-fluid" src={brand5} style={{width:"145px" , height:"145px"}}/>
                            <p class="b_name" style={{textAlign:"center"}}>LEVI'S</p>
                         
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "170px" }} >
                            <img class="img-fluid" src={brand6}  style={{width:"145px" , height:"145px"}}/>
                        
                            <p class="b_name" style={{textAlign:"center"}}>LOUIS VUITTON</p>
            
                        
                        </div>
                    </div>

                </div>

                <div class="col-sm-6" style={{ maxWidth: "600px",marginBottom:"10rem" }}>
                    <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }}>
                            <img class="img-fluid" src={brand7}  style={{width:"145px" , height:"145px"}} />
                            <p class="b_name" style={{textAlign:"center"}} >ZARA</p>
                          
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }} >
                            <img class="img-fluid" src={brand8}  style={{width:"145px" , height:"145px"}} />
                            <p class="b_name" style={{textAlign:"center"}}>LIFESTYLE</p>
                      
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sec4