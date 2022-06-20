import React, { useRef, useState, useEffect } from "react";
import Details from "./Details";
import "./profile.css";
import axios from 'axios'

const Profile = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "xyz@gmail.com",
    Password: "545454555",
    mobile: "1234567890",
    gender: "",
  });

  // const [formValue1, setFormValue1] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "xyz@gmail.com",
  //   Password: "545454555",
  //   mobile: "1234567890",
  //   gender: "",
  // });
  const [displayPersonalInfo, setdisplayPersonalInfo] = useState(true);
  const [displayDetails, setDisplayDetails] = useState(false);

  const [disabled, setDisabled] = useState(true);
  const ref = useRef();

  const updateHandler = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  // const restoreHandler = () => {
  //   setFormValue({ ...formValue1 });
  // };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const HandleClick = () => {
    setDisabled(false);
  };

  const personalInforDisplay = () => {
    setdisplayPersonalInfo(true);
    setDisplayDetails(false);
  };

  const detailsDisplay = () => {
    setdisplayPersonalInfo(false);
    setDisplayDetails(true);
  };
  useEffect(() => {
    axios
      .get(`${process.env.SV_BACKEND}/profile/08b65e98-7d11-4567-a63d-e6d38b8a7bd7`)
      .then((resp) => {
        setFormValue({firstName:resp.data.id,lastName:resp.data.id})
        
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="Profile_Main_Con">
        <div className="left_side_Con">
          <h1>Profile </h1>
          <h3 className="profile_selector" onClick={personalInforDisplay}>Personal Information</h3>
          <h3 className="profile_selector" onClick={detailsDisplay}>Details</h3>
        </div>
        <div className="profile_form">
          {displayPersonalInfo && (
            <form ref={ref}>
              <div className="left_side_Heading">
                <h3>Personal Information</h3>
                <p>
                  Hey there! Fill in your details for a personalized SimuVerse
                  Shopping experience
                </p>
              </div>
              <div className="profile_Right_Con">
                <label>First Name</label>
                <div className="profile_inner_flex">
                  <input
                    type="text"
                    name="firstName"
                    value={formValue.firstName}
                    onChange={handleChange}
                  />
                </div>
                <label>Last Name</label>
                <div className="profile_inner_flex">
                  <input
                    type="text"
                    name="lastName"
                    value={formValue.lastName}
                    onChange={handleChange}
                  />
                </div>
                <label>Email</label>
                <div className="profile_inner_flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formValue.email}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                  <span onClick={HandleClick}>CHANGE</span>
                </div>
                <label>Password</label>
                <div className="profile_inner_flex">
                  <input
                    type="password"
                    name="Password"
                    value={formValue.Password}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                  <span onClick={HandleClick}>CHANGE</span>
                </div>
                <div className="profile_radio_Button">
                  <label>Gender</label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={formValue.gender === "male"}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={formValue.gender === "female"}
                  />
                  <label>Female</label>
                </div>
                <label>Telephone</label>
                <div className="profile_inner_flex">
                  <input
                    type="number"
                    name="mobile"
                    value={formValue.mobile}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                  <span onClick={HandleClick}>CHANGE</span>
                </div>
              </div>
              <div className="bottom_Restore_Update">
                <button
                  className="restore"
                  type="button"
                  
                >
                  Restore
                </button>
                <button className="update" onClick={updateHandler}>
                  Update
                </button>
              </div>
            </form>
          )}
          {displayDetails && <Details />}
        </div>
      </div>
    </>
  );
};

export default Profile;
