import React, { useState } from 'react';
import Header from '../components/Header';
import AdjustIcon from '@mui/icons-material/Adjust';
import './Address.css';
import clothIcon from '../../../images/clean-clothes.png';
import { NavLink } from 'react-router-dom';

const Address = () => {
  const [user, setUser] = useState({
    name: '',
    address: '',
    contactNumber: '',
  });

  const [activeInput, setActiveInput] = useState(true);
  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="row">
              <div className="col" align="left">
                <h5>Select Delivery Address</h5>
                <h6>Default Address</h6>
              </div>
              <div className="col">
                <button className="btn btn-lg btn-outline-dark">
                  Add New Address
                </button>
              </div>
            </div>
            <div className="row">
              <div
                className="card"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  color: '#000',
                }}
              >
                <div className="row">
                  <div className="col" style={{ maxWidth: '50px' }}>
                    <input type="radio" />
                  </div>
                  <div className="col" style={{ textAlign: 'left' }}>
                    <strong>Gina Singh</strong>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam dapibus feugiat interdum. Ut lacinia, tellus sed
                      laoreet tincidunt, augue metus eu
                    </p>
                    <p>
                      Mobile : <b>0123456789</b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ maxWidth: '130px' }}>
                    {' '}
                    <button
                      className="btn btn-outline-dark"
                      style={{ width: '115px' }}
                    >
                      REMOVE
                    </button>
                  </div>
                  <div className="col" style={{ maxWidth: '130px' }}>
                    {' '}
                    <button
                      className="btn btn-outline-dark"
                      style={{ width: '115px' }}
                    >
                      EDIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row" align="left">
              <h5>DELIVERY ESTIMATES</h5>
              <div
                style={{
                  marginTop: '5%',
                  fontSize: 'large',
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2%',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={clothIcon}
                  style={{
                    maxWidth: '75px',
                    float: 'left',
                    backgroundColor: 'lightgrey',
                    padding: '2%',
                    borderRadius: '8px',
                  }}
                />
                <p style={{ marginLeft: '2%' }}>Delivered By 7 Apr 2022</p>
              </div>
              <div
                style={{
                  marginTop: '5%',
                  fontSize: 'large',
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2%',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={clothIcon}
                  style={{
                    maxWidth: '75px',
                    float: 'left',
                    backgroundColor: 'lightgrey',
                    padding: '2%',
                    borderRadius: '8px',
                  }}
                />
                <p style={{ marginLeft: '2%' }}>Delivered By 7 Apr 2022</p>
              </div>
            </div>

            <div className="row" align="left">
              <h5>PRICE DETAILS</h5>
              <div className="row">
                <div className="col">
                  <h6>Subtotal:</h6>
                </div>
                <div className="col">
                  <div className="col">Price</div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6> GST:</h6>
                </div>
                <div className="col">Price</div>
              </div>
              <div className="row">
                <div className="col">
                  <h6>Shipping:</h6>
                </div>
                <div className="col">Free Delivery</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col">
                  <h6>Total</h6>
                </div>
                <div className="col">Total Price</div>
              </div>
            </div>
            <NavLink to="/bag/address/payment">

            <button className="con-btn">Continue</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
