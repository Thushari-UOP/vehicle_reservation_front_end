import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Passenger() {
  return (
    <div>
      <Header  />
      {/* BreadCrumb and Sign In, Sign Up */}

      <div
        className="p-5 align-items-md-center"
        style={{
          background: "#a4daff",
          backgroundImage:
            "url(https://png.pngtree.com/background/20220731/original/pngtree-flat-banner-car-rental-order-application-online-picture-image_1896667.jpg)",
          height: "490px",
          backgroundColor: "#a4daff",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          marginTop:"65px"
        }}
      >
        <div className="row p-4">
          <Link to="/Passenger/SignIn">
            <Button variant="outline-dark" className="m-5 justify-content-end">
              Sign In
            </Button>
          </Link>

          <Link to="/Passenger/Registation">
            <Button variant="outline-dark" className="m-5 justify-content-end">
              Sign Up
            </Button>
          </Link>
        </div>
        
        <Link to="/Booking" >
          <Button
            variant="outline-dark"
            className="mt-5 mx-5 border-0"
            style={{width: "90%" ,boxShadow: "3px 3px 30px 0",fontFamily:"cursive" }}
          >
            Find Vehicle
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Passenger;
