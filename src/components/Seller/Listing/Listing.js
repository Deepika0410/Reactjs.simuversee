import "./listing.css";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Shirts1 from "../Orange_Cloth.png";
import ListingData from "./ListingData";

function Listening() {
  const [noOfElement , setnoOfElement] = useState(1);
  const LoadMore =() =>{
    setnoOfElement(noOfElement + 1); 
  }
  const slice = ListingData.slice(0,noOfElement);

  
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const sortedData = ListingData.sort((a, b) => {
      return new Date(b.lastUpdated) - new Date(a.lastUpdated);
    });
    setFilteredData(sortedData);
  }, []);
  return (
    <div style={{ marginTop: "3rem" , textAlign: "center"  }}  >
       <h1>hello Listening</h1> 
       <Button>HIi World</Button> 
       <div className="container color"> 
       <div className="row recent ">
          <h1>Recent Listening</h1>
        </div>
        <div className="row yourRecent" style={{ textAlign: "start" }}>
          <p>Your Recent Product Listing on simuverse</p>
        </div>
        <div className="row ">
          <div className="col-8 increase">
            <div
              style={{ display: "flex" }}
              className="justify-content-between"
            >
              <div className="date">TODAY</div>{" "}
              <div className="date">16/04/22</div>
            </div>
          </div>
        </div> 
     {filteredData?.map((item) => {
        const { id, type, src, title, desc, lastUpdated, rating, price } = item;

        return (
          <div>
            {console.log(filteredData)}
            <div
              key={id}
              className="d-flex justify-content-between"
              style={{ padding: "1% 5%", marginTop: "1rem" }}
            >
              <h3 className="listing_Date_Heading">Product Listing Date</h3>
              <h3>{`${new Date(lastUpdated).toDateString()}`}</h3>
            </div>
            <div
              className="row justify-content-between"
              style={{ borderBottom: "1px solid #CCCCCC " }}
            >
              <div
                className="col-md-8  mb-2 box-1 pb-4"
                style={{ border: "1px solid #FFFFFF" }}
              >
                <div className="row">
                  <div className="d-flex flex-column  col-6 sameDesign">
                    <div className="col-6 sameDesign">
                      <p>Product name</p>
                    </div>
                    <h3 className="col-6 listingValue">{title}</h3>
                  </div>
                  <div className="d-flex flex-column col-6 sameDesign">
                    <p className="sameDesign" style={{ textAlign: "end" }}>
                      price per piece
                    </p>

                    <h3 className="listingValue" style={{ textAlign: "end" }}>
                      {price}
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-6 sameDesign"
                    style={{ textAlign: "start" }}
                  >
                    <p>Details</p>
                    <div
                      className="col-12 lorem"
                      style={{ textAlign: "justify" }}
                    >
                      <p>{desc}</p>
                    </div>
                  </div>

                  <div
                    className="d-flex flex-column col-6 sameDesign"
                    style={{ textAlign: "end" }}
                  >
                    <p>Rating</p>
                    <h3 className="listingValue">{rating}</h3>
                  </div>
                </div>
              </div>
              <div className=" cardDesign mb-2 p-1">
                <img className="listing_Img" src={src} alt="" />
              </div>
            </div>
          </div>
        );
      })}
      {slice.map((item,index)=>{
        const { id, type, src, title, desc, lastUpdated, rating, price } = item; 
        return(
          <div key={index}>
          <div
          className="row justify-content-between"
          style={{ borderBottom: "1px solid #CCCCCC " }}
        >
          <div
            className="col-md-8  mb-2 box-1 pb-4"
            style={{ border: "1px solid #FFFFFF" }}
          >
            <div className="row">
              <div className="col-6 sameDesign" style={{ textAlign: "start" }}>
                <p>Product name</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>price per piece</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>price</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 sameDesign" style={{ textAlign: "start" }}>
                <p>Details</p>
              </div>
              <div className="col-6 lorem" style={{ textAlign: "justify" }}>
                <p>
                  Lorem Ipsum è un testo segnaposto utilizzato nel settore della
                  tipografia e della stampa.dard sin dal sedicesimo
                </p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>Quality</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>1 X 20</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 margin-top-1 cardDesign mb-2 p-1">
            <img src={Shirts1} alt="" className="img-fluid" />
          </div>
        </div>
         <div className='row mt-3'>
              <div className='col-6'  style={{textAlign:"start"}}><p>LAST MONTH</p></div>
              <div className='col-6'  style={{textAlign:"start"}}><p>15/03/22</p></div>
          </div> 
      <div className="row mt-3 ">
          <div className="col-8 increase">
            <div
              style={{ display: "flex" }}
              className="justify-content-between"
            >
              <div className="date">LAST MONTH</div>{" "}
              <div className="date">15/03/22</div>
            </div>
          </div>
        </div>

      <div className="row justify-content-between">
          <div
            className="col-md-8 mb-2 box-2 pb-4"
            style={{ border: "1px solid #FFFFFF" }}
          >
            <div className="row">
              <div className="col-6 sameDesign" style={{ textAlign: "start" }}>
                <p>Product name</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>price per piece</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>price</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 sameDesign" style={{ textAlign: "start" }}>
                <p>Details</p>
              </div>
              <div className="col-6 lorem" style={{ textAlign: "justify" }}>
                <p>
                  Lorem Ipsum è un testo segnaposto utilizzato nel settore della
                  tipografia e della stampa.dard sin dal sedicesimo
                </p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>Quality</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>1 X 20</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 cardDesign margin-top-2 p-1">
            <img src={Shirts1} className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-between">
          <div
            className="col-md-8 mb-2 box-3 pb-4"
            style={{ border: "1px solid #FFFFFF" }}
          >
             <div className="row">
              <div className="col-6 sameDesign" style={{ textAlign: "start" }}>
                <p>Product name</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>price per piece</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>price</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 sameDesign" style={{ textAlign: "start" }}>
                <p>Details</p>
              </div>
              <div className="col-6 lorem" style={{ textAlign: "justify" }}>
                <p>
                  Lorem Ipsum è un testo segnaposto utilizzato nel settore della
                  tipografia e della stampa.dard sin dal sedicesimo
                </p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>Quality</p>
              </div>
              <div className="col-3 sameDesign" style={{ textAlign: "end" }}>
                <p>1 X 20</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 cardDesign mt-4 p-1">
            <img src={Shirts1} className="img-fluid " />
          </div>
        </div> 
        </div> 
        );
      })}
     

      <div className="row mt-4">
          {" "}
          <div className="col-12 ">
            <button className="btn btn-design" style={{ textAlign: "center" }} onClick={() => LoadMore()}>
              View More
            </button>{" "}
          </div>{" "}
        </div>
      </div> 
    </div>
  );
}

export default Listening;