import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Drive() {
  return (
    <div>
      <div
        style={{
          background: "#a4daff",
          backgroundImage: "url(Images/drive_image.png)",
          // "url(https://www.netsolutions.com/insights/wp-content/uploads/2020/12/the-10-best-rideshare-apps-of-2021.webp)",
          height: "525px",
          backgroundSize: "cover",
          backgroundpositionx: "inherit",
          marginTop: "65px",
        }}
         className="d-flex align-items-center justify-content-center"
      >
        <div className="d-flex align-items-center">
          <Link to="/drive/sign-in">
            <Button variant="outline-light" className="me-5 col-12">
              Sign In
            </Button>
          </Link>

          <Link to="/driver/registation">
            <Button variant="outline-light" className="ms-5 col-12">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Drive;
