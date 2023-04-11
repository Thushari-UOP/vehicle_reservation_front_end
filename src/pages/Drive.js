import React from "react";
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Drive() {
  return (
    <div className="">
      <div className="p-5 align-items-md-center"
      style={{
        background: "#a4daff",
        backgroundImage:
          "url(https://www.netsolutions.com/insights/wp-content/uploads/2020/12/the-10-best-rideshare-apps-of-2021.webp)",
        height: "490px",
        backgroundColor: "#ecfbff",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundpositionx: "inherit",
        marginTop:"65px"
      }}>

        <div className="row p-4 ">
          <Link to="/drive/sign-in"  style={{paddingLeft: "75%"}}>
            <Button variant="outline-dark" className="m-5 justify-content-end" >
              Sign In
            </Button>
          </Link>

          <Link to="/driver/registation" style={{paddingLeft: "75%"}}>
            <Button variant="outline-dark" className="m-5 justify-content-end" >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Drive;
