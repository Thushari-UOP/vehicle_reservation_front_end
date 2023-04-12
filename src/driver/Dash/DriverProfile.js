import React, { useEffect, useState } from "react";
import DriveDashSideBar from "./DriveDashSideBar";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import VehicleListComponent from "../components/VehicleListComponent";
import { decodeToken } from "../../utils/utils";
import axiosInstance from "../../axios/axios-instance";

// import DriverService from "../../Service/DriverService";

export default function DriverProfile() {
  const [driver, setDriver] = useState({});

  useEffect(() => {
    loadDriver();
  }, []);

  const userName = decodeToken().user.userName;

  const loadDriver = async () => {
    const result = await axiosInstance.get(
      "http://localhost:8080/api/v1/driver/getDriver/" + userName
    );
    setDriver(result.data);
  };

  return (
    <div style={{ backgroundImage: "url('https://th.bing.com/th/id/R.34638c57ac25511766fe9f8ed0ee5b20?rik=GuoRjNTw970TXA&pid=ImgRaw&r=0')",backgroundPositionX:"right",
    backgroundPositionY: "-356px",
    backgroundAttachment: "fixed"}}>
      <Container className="ms-0 mt-5">
        <Row>
          <Col
            className=""
            style={{ marginLeft: "-12px", display: "contents" }}
          >
            <DriveDashSideBar style={{ height: "100%" }} />
          </Col>
          <Col >
            <h3 className="mt-5 ms-4 font-weight-bold fw-bolder opacity-75">
              Profile
            </h3>
            <hr className="ms-4" />
            <Card className="mt-4 ms-5 mb-5 border-0" style={{background: "#e4e0f4f5"}}>
              <Card.Body
                className="ms-4 mb-4 mt-4 me-4 shadow"
                style={{ background: "rgb(109 84 220 / 25%)", color: "darkslateblue" }}
              >
                <Card.Subtitle className="text-decoration-underline mt-4 fw-bold">
                  Driver Details
                </Card.Subtitle>
                <br />
                <ul className="list-group ">
                  <span
                    className="mx-auto mb-4"
                    style={{
                      width: "150px",
                      height: "150px",
                      backgroundSize: "cover",
                      backgroundImage:
                        "url(https://img.freepik.com/premium-vector/driver-experience-symbol-man-driving-car-icon-isolated-white-background_176411-3003.jpg?w=360)",
                    }}
                  />
                  <li className="list-group-item col-12 mb-3">
                    First Name : {driver.firstName}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    Last Name : {driver.lastName}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    User Name : {driver.userName}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    E-mail : {driver.email}{" "}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    Telephone No : {driver.telephone}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    Address : {driver.address}{" "}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    License No. : {driver.licenceNo}
                  </li>
                  <li style={{ listStyle: "none" }}></li>
                </ul>
                <Card.Subtitle className="text-decoration-underline mt-4 mb-4 fw-bold">
                  Vehicle Details
                </Card.Subtitle>

                <VehicleListComponent />

              </Card.Body>
              <div className="align-self-end mb-4">
              <Button
                  className="text-opacity-25 me-5 shadow" 
                  variant="outline-success"
                  size="sm"
                >
                 Update Details
                </Button>
                <Button
                  className="text-opacity-25 shadow ms-4 me-4" 
                  variant="outline-danger"
                  size="sm"
                >
                  Remove Account
                </Button>
                </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
