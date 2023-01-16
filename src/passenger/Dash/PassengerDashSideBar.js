import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PassengerDashSideBar() {
  return (
    <div className="">
      <div style={{ height: "25px", backgroundColor:" #bfb8de"}}></div>
      <div
        className=" high pe-5"
        style={{ minHeight: "530px", maxWidth:"275px" , backgroundColor:" #bfb8de"}}
      >
        <Nav className="flex-column p-5">
          <Nav className="pb-3 fw-bold gx-xl-4">
            <Link to={"/Passenger/Profile"} style={{color:"darkblue"}}>Profile</Link>
          </Nav>
          <Nav className="pb-3 fw-bold gx-xl-4">
            <Link to={"/Booking"} style={{color:"darkblue"}}>Booking</Link>
          </Nav>
          <Nav className="pb-3 fw-bold gx-xl-4">
            <Link to={"/Passenger/Hist"} style={{color:"darkblue"}}>User Histry</Link>
          </Nav>
          {/* <Nav className="pb-3 fw-bold gx-xl-4">
            <Link to={"/Reservation/Map"} style={{color:"darkblue"}}>Map</Link>
          </Nav> */}
        </Nav>
      </div>
    </div>
  );

}
