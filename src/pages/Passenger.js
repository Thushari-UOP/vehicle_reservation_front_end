import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Passenger() {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(Images/passenger.webp)",
            // "url(https://png.pngtree.com/background/20220731/original/pngtree-flat-banner-car-rental-order-application-online-picture-image_1896667.jpg)",
            height: "530px",
            backgroundSize: "cover",
            backgroundpositionx: "inherit",
            marginTop: "65px",
        }}
        
         className="d-flex align-items-center justify-content-center "
      >
        <div className="d-flex justify-content-center mt-5 ">
          <Link to="/passenger/sign-in">
            <Button variant="outline-dark"  className=" mb-5 me-5">
              Sign In
            </Button>
          </Link>

          <Link to="/passenger/registation">
            <Button variant="outline-dark"  className=" ms-5">
              Sign Up
            </Button>
          </Link>      
        </div>
      </div>
      <div className=" bg-black">
        <Link to="/booking" >
          <Button
            variant="outline-dark"
            className="border-0 ms-5"
            style={{marginTop:"-10%", width:"90%" ,boxShadow: "3px 3px 30px 0",fontFamily:"cursive" }}
          >
            Find Vehicle
          </Button>
        </Link>
        </div>
    </div>
  );
}

export default Passenger;
