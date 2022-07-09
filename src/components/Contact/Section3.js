import React from "react";
import "./Section3.css";
const Section3 = () => {
  return (
    <div className="s-3">
      <div className="s3-text1">
        <p >Let's Talk</p>
      </div>
      <div className="lets-talk">
        <p>
        Enter the details below and lets get connected.
        </p>
      </div>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="col-8 col-md-5">
            <form action="">
              <div className="form-group form-c">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Business Email"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company 
                  Website"
                />
              </div>
            </form>
          </div>
          <div className="col-8 col-md-5" style={{ marginTop: "1rem" }}>
            <span>
              <p style={{ fontSize: "1.2rem" }} className="pHelp">
                How can we help you?
              </p>
            </span>
            <form action="">
              <div className="form-group t-area">
                <textarea type="text" rows="4" className="form-control" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
