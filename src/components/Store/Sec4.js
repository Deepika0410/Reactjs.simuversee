import React from 'react';
import './sec4.css';
import brand from '../../images/brand.png';

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
                            <img class="img-fluid" src={brand} />
                            <p class="b_name" >Brand Name</p>
                            <p class="b_offer" >Offer %</p>
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }} >
                            <img class="img-fluid" src={brand} />
                            <p class="b_name">Brand Name</p>
                            <p class="b_offer" >Offer %</p>
                        </div>
                    </div>

                </div>

                <div class="col-sm-6" style={{ maxWidth: "600px" }}>
                    <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }}>
                            <img class="img-fluid" src={brand} />
                            <p class="b_name" >Brand Name</p>
                            <p class="b_offer" >Offer %</p>
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }} >
                            <img class="img-fluid" src={brand} />
                            <p class="b_name">Brand Name</p>
                            <p class="b_offer" >Offer %</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='row justify-content-center' >
                <div class="col-sm-6" style={{ maxWidth: "600px" }}>
                    <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }}>
                            <img class="img-fluid" src={brand} />
                            <p class="b_name" >Brand Name</p>
                            <p class="b_offer" >Offer %</p>
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "170px" }} >
                            <img class="img-fluid" src={brand} />
                            <div className='' style={{display:"flex", flexDirection:"row",}}>
                            <p class="b_name">Brand Name</p>
                            <p class="b_offer" style={{ marginLeft:"4rem", alignItem:"center", justifyContent:"center", marginTop:".2rem" }} >Offer %</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-sm-6" style={{ maxWidth: "600px",marginBottom:"10rem" }}>
                    <div class="row">
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }}>
                            <img class="img-fluid" src={brand} />
                            <p class="b_name" >Brand Name</p>
                            <p class="b_offer" >Offer %</p>
                        </div>
                        <div class="col-sm" align="center" style={{ minWidth: "150px" }} >
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