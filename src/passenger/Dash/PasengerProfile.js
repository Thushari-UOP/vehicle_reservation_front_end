import React, { useEffect, useState } from "react";
import PassengerDashSideBar from "./PassengerDashSideBar";
import { Col, Row, Card, Container } from "react-bootstrap";
import Header from "../../Components/Header";
import axios from "axios";
import axiosInstance from "../../axios/axios-instance";
import { decodeToken } from "../../utils/utils";

export default function Profile() {
  const [passenger, setPassenger] = useState({});

  useEffect(() => {
    console.log("first");
    loadUser();
  }, []);

  const userName = decodeToken().user.userName;

  const loadUser = async () => {
    const result = await axiosInstance.get(
      "http://localhost:8080/api/v1/Passenger/getPassenger/" + userName
    );
    setPassenger(result.data);
  };

  return (
    <div>
      <Header />
      <Container className="ms-0 mt-5">
        <Row>
          <Col
            className=""
            style={{ marginLeft: "-12px", display: "contents" }}
          >
            <PassengerDashSideBar />
          </Col>
          <Col>
            <Card className="mt-5 ms-5 border-dark border-opacity-50">
              <Card.Header
                as="h5"
                className="text-center text-white-50"
                style={{ backgroundColor: "darkslateblue" }}
              >
                User Profile
              </Card.Header>
              <Card.Body
                className="ms-4 mb-4 me-4"
                style={{ background: "#bfb8de", color: "darkslateblue" }}
              >
                <Card.Subtitle className="text-decoration-underline mt-4">
                  User Details
                </Card.Subtitle>
                <br />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item col-12 mb-3">
                    Name : {passenger.name}{" "}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    User Name : {passenger.userName}{" "}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    E-mail : {passenger.email}{" "}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    Telephone No: {passenger.telephoneNo}
                  </li>
                  <li style={{ listStyle: "none" }}></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
