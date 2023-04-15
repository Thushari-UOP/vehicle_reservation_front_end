import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DriveDashSideBar() {
    return (
        <div>
            <div
                className="mt-3"
                style={{ minHeight: "100%" , maxWidth: "275px", backgroundColor: " #bfb8de" }}
            >
                <Nav className="flex-column p-5">
                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/passenger/profile"} style={{ color: "darkblue" }}>Profile</Link>
                    </Nav>

                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/booking"} style={{ color: "darkblue" }}>Booking</Link>
                    </Nav>

                    <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/passenger/hist"} style={{ color: "darkblue" }}>Reservations</Link>
                    </Nav>

                    {/* <Nav className="pb-3 fw-bold gx-xl-4">
                        <Link to={"/Reservation/Map"} style={{ color: "darkblue" }}>Map</Link>
                    </Nav> */}

                </Nav>
            </div>
        </div>
    );
}
