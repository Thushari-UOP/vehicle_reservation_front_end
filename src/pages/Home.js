import React from "react";
import imag1 from "../Images/ReserveVehi.jpg";
import imag2 from "../Images/Driver3.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="pt-5">
      <Header/>
      <section
        className="row"
        style={{
          width: "101%",
          height: "445px",
          backgroundColor: "rgb(145 175 199)",
        }}
      >
        <img className="col-7" src={imag1} alt="" style={{ height: "445px" }} />
        <div className="col-5 mt-5">
          <h2
            className="mt-5 text-center fon"
            style={{ fontFamily: "monospace", fontSize: "x-large" }}
          >
            Reach the destination safely...
          </h2>
          <h2
            className="mt-5 text-center"
            style={{ fontFamily: "monospace", fontSize: "x-large" }}
          >
            Choose a vehicle and driver of your wish...
          </h2>
          <h2
            className="mt-5 text-center"
            style={{ fontFamily: "monospace", fontSize: "x-large" }}
          >
            Save time and easily plan future work...
          </h2>

          <div className="m-5 ps-5">
            <Link to="/Passenger/SignIn">
              <Button variant="outline-dark"
                className="m-4 ms-5 justify-content-end">Sign In</Button>
            </Link>
            <Link to="/Passenger/Registation">
              <Button variant="outline-dark" className="ms-5">Sign Up</Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          height: "550px",
          backgroundColor: "rgb(202 206 206)",
        }}
      >
        <img
          className="row-cols-6 float-end"
          src={imag2}
          alt=""
          style={{ height: "610px" }}
        />
      </section>
      
    </div>
  );
}
