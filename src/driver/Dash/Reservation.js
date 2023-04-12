import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DriveDashSideBar from "./DriveDashSideBar";
// import { useState } from "react";
import axiosInstance from "../../axios/axios-instance";
import { decodeToken } from "../../utils/utils";
// import { useEffect } from "react";

export default function Reservation() {
  // const [resId, setResId] = useState("");
  // const [VehicleNo, setVehicleNo] = useState("");
  // const [pickup, setPickup] = useState("");
  // const [drop, setDrop] = useState("");
  // const [passengers, setPassengers] = useState("");
  // const [date, setDate] = useState("");
  // const [days, setDays] = useState("");

  // const [veh, setVeh] = useState("");

  // const [custTele, setCustTele] = useState("");

  // const [show, setShow] = useState("");


  const userName = decodeToken().user.email;

  axiosInstance
      .get("http://localhost:8080/api/v1/driver/all-reservations/" + userName)
      .then((res) => {
        console.log(res);
      });
 

  return (
    <div>
      <div className="mt-5">
        <Container className="ms-0">
          <Row>
            <Col style={{ marginLeft: "-12px", display: "contents" }}>
              <DriveDashSideBar />
            </Col>
            <Col>
              <h3 className="mt-5 ms-5 text-black-50 fw-bold">
                Reservation Details
              </h3>
              <Card className="mt-5 mb-lg-5 ms-4 border-0 shadow">
                <Card.Body
                  className="m-4"
                  style={{
                    color: "darkslateblue",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <div className="mb-5 mt-3">
                    <ul className="list-group list-group-flush">
                      <Row>
                        <Col className="list-group-item">Reservation Id :</Col>
                        <Col className="list-group-item">Vehicle No. :</Col>
                      </Row>
                      <Row>
                        <Col className="list-group-item">Pickup Location :</Col>
                        <Col className="list-group-item">Drop Location :</Col>
                      </Row>
                      <Row>
                        <Col className="list-group-item">Passengers :</Col>
                        <Col className="list-group-item">Days :</Col>
                      </Row>
                      <Row>
                        <Col className="list-group-item">Date :</Col>
                        <Col className="list-group-item">Time :</Col>
                        <Col className="list-group-item">Status :</Col>
                      </Row>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
