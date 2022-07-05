import Homebar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import SellerHome from "./components/Seller/Home/Home";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import Wishlist from "./components/Wishlist/Wishlist";
import Bag from "./components/Bag/bag";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";  
import Contact from "./components/Contact/Contact";
import Register from "./components/Login/Register";
import Product from "./components/Store/components/product/product";
import CharacterCreation from "./components/CharacterCreation/CharacterCreation";
import Footer2 from "./components/Footer/Footer2";
import Catalogous from "./components/Store/Category/CatalogousPage";
import Seller from "./components/Seller/Seller";
import Address from "./components/Bag/Address/Address";
import Seller2 from "./components/Seller/Seller2";
import Seller3 from "./components/Seller/Seller3";
import RegistrationPage1 from "./components/Seller/Registration/RegistrationPage1";
import Shipping from "./components/Seller/Registration/Shipping";
import RegistrationComplete from "./components/Seller/Registration/RegistrationComplete";
import Profiles from "./Profiles/Profiles";

// import Seller2 from "./components/Seller/Seller2"
// import Seller3 from "./components/Seller/Seller3"
import Listing from "./components/Seller/Listing/Listing";
import Productlisting from "./components/Seller/ProductListing/ProductListing";
import ProductThreeD from "./components/Store/components/product/ProductThreeD";
import { useState } from "react";
const App = () => {
  // hide the navbar when the user is on the login page
  const [hideNavbar, setHideNavbar] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Homebar />
        

        <Routes>
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route exact path="/simuverse" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/bag/address" element={<Address />} />
          {/* <Route path="/bag/address/payment" element={<Payment/>}/> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store/product" element={<Product />} />
          <Route path="/store/categories" element={<Catalogous />} />
          <Route path="/shome/seller" element={<Seller />} />
          <Route path="/shome/seller/addimage" element={<Seller2 />} />
          <Route path="/shome/seller/productsuccess" element={<Seller3 />} />
          <Route
            path="/home/character-creation/*"
            element={<CharacterCreation />}
          />
          <Route
            path="/shome/registrationpage1"
            element={<RegistrationPage1 />}
          />
          *

          <Route path="/shome/registration/shipping" element={<Shipping />} />
          <Route
            path="/shome/registrationcompete"
            element={<RegistrationComplete />}
          />
          {/* <Route path="/seller" element={<Seller />} /> */}
          {/* <Route path="/seller/addimage" element={<Seller2/>} />
          <Route path="/seller/productsucnpm i
          cess" element={<Seller3/>}/> */}
          <Route path="/shome/listing" element={<Listing />} />
          <Route path="/shome" element={<SellerHome />} />
          <Route path="/shome/productlisting" element={<Productlisting />} />
         
          <Route path="/productThreeDView" element={<ProductThreeD />} />
            {/* Error page */}
            <Route path="*" element={<Navigate replace to="/home" />} />
            <Route path="/profiles" element={<Profiles/>} />
        </Routes>

        <Footer2 />
      </BrowserRouter>
    </div>
  );
};

export default App;
