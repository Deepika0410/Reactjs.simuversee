import React from "react";
import "./payment.css"
import "../components/Header.css";
import {useState} from "react";
import bank from "../../../images/bank-logo.png";
import cash from "../../../images/cash.jpg";
import credit from "../../../images/credit-card.jpg";
import phnpay from "../../../images/ppay-logo.png";
import gpay from "../../../images/gpay-logo.png";
import upi from "../../../images/upi.png";
import onlinepay from "../../../images/onlinepay.png";




function Payment(){
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


 
return(
      <div>
     <div className="header">
         <div className="section2">
          <h2 style={{ color: 'white', fontWeight: 'normal' }}>
            Checkout &#8594; Address{' '} &#8594; Payment
          </h2>
        </div>
      </div>
          <div style={{margin:"30px"}}>
              <h2>Choose Payment Mode</h2>
          </div>
          <div className="payment-container">
          <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        > <img className="logo-imge" src={bank} style={{
        width: "30px",
        height: "30px",
        }}/>
        <span style={{marginLeft:"10px"}}>

          Net Banking  
        </span>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        > <img className="logo-imge" style={{width: "30px",
        height: "30px",
       }} src={cash}/>
       <span style={{marginLeft:"10px"}}>  Cash On Delivery </span>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >  <img className="logo-imge" style={{width: "30px",
        height: "30px",
       }} src={onlinepay}/>
          <span style={{marginLeft:"10px"}} >

            Phone Pay/Google Pay/BHIM UPI
        </span>

        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        > <img className="logo-imge" src={credit} style={{width: "30px",
        height: "30px"}}/>
        <span style={{marginLeft:"10px"}}>

         Credit/Debit Card
        </span>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <span style={{

fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: "600",
fontSize: "16px",
lineHeight: "24px",
color: "#000000"

}}>Pay Using UPI</span>
          <div className="pay-logo">
           
             <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center" , marginTop:"40px"}}>

            <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", marginLeft:"25px",marginRight:"25px"}} >
             <img className="pay-img"  src={phnpay} style={{height:"87px", width:"87px"}}/>
             <label for="phn" className="lab"> Phone Pay</label>
            <input type="radio" id="phn" name="pay" style={{display:"block"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", marginLeft:"25px",marginRight:"25px"}}>
             <img className="pay-img" src={gpay} style={{height:"87px", width:"87px"}}/>
            <label for="g-pay" className="lab"  >Google Pay</label>
            <input type="radio" id="gpay"name="pay" style={{display:"block"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", marginLeft:"25px",marginRight:"25px"}}>
             <img className="pay-img" src={upi} style={{height:"87px", width:"87px"}} />
            <label for="upi" className="lab" >Enter UPI ID</label>
            <input type="radio" id="upi" name="pay"style={{display:"block"}}/>
             </div>
             </div>
          </div>
         
        <input type="text" placeholder="Enter UPI ID here" className="inp-pay"/><br/>
        <button className="pay-btn">PAY NOW</button>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            
          </p>
        </div>
      </div>
         
         
     
    
          </div>
 
   </div>
);


}

export default Payment;
