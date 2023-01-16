import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function DriveDashSideBar() {
    return (
        <div>
            <div
                className=" high pe-5 pb"
                style={{ minHeight: "100%" ,zIndex:'1', maxWidth: "275px", backgroundColor: " #bfb8de" }}
            >
                <div className="ms-5 mt-5" style={{ width: "100px", height: "100px", display: "inline-flex", backgroundSize: "cover", borderRadius: "60px", backgroundImage: "url(https://img.freepik.com/premium-vector/driver-experience-symbol-man-driving-car-icon-isolated-white-background_176411-3003.jpg?w=360)" }}></div>

                <Nav className="flex-column p-5">
                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/Driver/Profile"} style={{ color: "darkblue" }}>Profile</Link>
                    </Nav>

                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/Driver/Reservation"} style={{ color: "darkblue" }}>Reservations</Link>
                    </Nav>

                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/Drive/Request"} style={{ color: "darkblue" }}>Request</Link>
                    </Nav>

                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/Driver/Calender"} style={{ color: "darkblue" }}>Callender</Link>
                    </Nav>

                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/Drive/Ratings"} style={{ color: "darkblue" }}>Ratings</Link>
                    </Nav>

                </Nav>
            </div>
        </div>
    );
}
