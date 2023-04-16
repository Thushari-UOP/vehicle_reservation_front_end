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
    <div
      style={{
        backgroundImage:
          "url('https://assets.cars24.com/production/c2b-website/230413172716/js/6f1a072ad060cf974f32b13a7fefe2ee.svg')",
        backgroundPosition:"100% 106px",
        backgroundAttachment: "fixed",
        backgroundSize:"85%",
        backgroundRepeat:"no-repeat"
      }}
    >
      <Container className="ms-0 mt-5">
        <Row>
          <Col
            className=""
            style={{ marginLeft: "-12px", display: "contents" }}
          >
            <DriveDashSideBar style={{ height: "100%"}} />
          </Col>
          <Col>
            <h3 className="mt-5 ms-5 d-flex opacity-50">Profile</h3>
            <hr className="mt-3 ms-5 opacity-50" />
            <Card
              className="mt-4 ms-5 mb-5 border-0 shadow-sm"
              style={{ background: "rgb(246 246 246 / 34%)" }}
            >
              <Card.Body
                className="ms-4 mb-4 mt-4 me-4 "
                style={{
                  color: "darkslateblue",
                }}
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
              <div className="align-self-start ms-5 mb-4">
                <Button
                  className="text-opacity-25 me-5 shadow"
                  variant="outline-success"
                  // size="sm"
                >
                  Update Details
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
