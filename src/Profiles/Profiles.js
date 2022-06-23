import React, { useState } from 'react'
import './Profiles.css'
import logo from './prologo.png'
import { Container, Row } from 'react-bootstrap'

function Profiles() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [states, setStates] = useState();
  const [country, setCountry] = useState();
  const [zip, setZip] = useState();

  function checkData(e) {
    e.preventDefault();
    let data = [{
      first: firstName,
      last: lastName,
      email: email,
      contact: contact,
      address: address,
      city: city,
      states: states,
      country: country,
      zip: zip,
    }]




    console.table(data);
    // alert("hello");
  }
  return (
    <div>
      <Container>
        <Row className='text-center'>
          <p className='edit'>
            EDIT PROFILE
          </p>
        </Row>
        <Row className='b'>
          <form onSubmit={checkData}>
            <div className='row text-center'>
              <img src={logo} className='cenDOimg'
                style={{ height: "184px", width: "184px", margin: "0 auto" }}
              />
            </div>
            <div className='row g-3'>
              <div class="col-md-6 text-start lines">
                <label for="inputEmail4" class="form-label">FIRST NAME</label>
                <input type="text" class="form-control" id="inputFirst" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
              </div>

              <div class="col-md-6 text-start lines">
                <label for="inputEmail4" class="form-label">LAST NAME</label>
                <input type="text" class="form-control" id="inputLast" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
              </div>

              <div class="col-12 lines text-start">
                <label for="inputAddress" class="form-label text-start">EMAIL</label>
                <input type="email" class="form-control" id="inputEmail1" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>

              <div class="col-12 lines text-start">
                <label for="inputAddress" class="form-label text-start">CONTACT NUMBER</label>
                <input type="number" class="form-control" id="inputContact11" value={contact} onChange={(e) => { setContact(e.target.value) }} />
              </div>

              <div class="col-12 lines text-start">
                <label for="inputAddress" class="form-label text-start">ADDRESS</label>
                <input type="text" class="form-control" id="inputAddress" value={address} onChange={(e) => { setAddress(e.target.value) }} />
              </div>


              <div class="col-md-6 text-start lines">
                <label for="inputEmail4" class="form-label">CITY</label>
                <input type="text" class="form-control" id="inputCity" value={city} onChange={(e) => { setCity(e.target.value) }} />
              </div>

              <div class="col-md-6 text-start lines">
                <label for="inputEmail4" class="form-label">STATE</label>
                <input type="text" class="form-control" id="inputState" value={states} onChange={(e) => { setStates(e.target.value) }} />
              </div>


              <div class="col-md-6 text-start lines">
                <label for="inputEmail4" class="form-label">COUNTRY</label>
                <input type="text" class="form-control" id="inputCountry" value={country} onChange={(e) => { setCountry(e.target.value) }} />
              </div>

              <div class="col-md-6 text-start lines">
                <label for="inputEmail4" class="form-label">ZIP CODE</label>
                <input type="text" class="form-control" id="inputZipCode" value={zip} onChange={(e) => { setZip(e.target.value) }} />
              </div>

              <div class="col-12 mt-5 ml-5">
                <button type="submit" class="btn btns">save</button>
              </div>
            </div>
          </form>
        </Row>

      </Container>
    </div>
  )
}

export default Profiles