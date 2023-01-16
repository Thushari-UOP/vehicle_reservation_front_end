import React from "react";
import PassengerDashSideBar from "./PassengerDashSideBar";
import { Col, Row, Card, Container } from "react-bootstrap";
import Header from "../../components/Header"

export default function Profile() {
  return (
    <div>
      <Header/>
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
              <Card.Header as="h5" className="text-center text-white-50" style={{backgroundColor: "darkslateblue"}}>
                User Profile
              </Card.Header>
              <Card.Body className="ms-4 mb-4 me-4" style={{background:"#bfb8de",color:"darkslateblue"}}>
                <Card.Subtitle className="text-decoration-underline mt-4">
                  User Details
                </Card.Subtitle>
                <br />
                <ul class="list-group list-group-flush">
                  <li class="list-group-item col-12 mb-3">Name : </li>
                  <li class="list-group-item col-12 mb-3">User Name : </li>
                  <li class="list-group-item col-12 mb-3">Password : </li>
                  <li class="list-group-item col-12 mb-3">E-mail : </li>
                  <li class="list-group-item col-12 mb-3">Telephone No: </li>
                  <li style={{listStyle: "none"}}></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
