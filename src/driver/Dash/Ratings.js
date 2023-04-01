import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import DriveDashSideBar from "./DriveDashSideBar";

function Ratings() {
  return (
    <div>
      <Container className="ms-0 mt-5">
        <Row>
          <Col className="" style={{ display: "contents" }}>
            <DriveDashSideBar />
          </Col>
          <Col>
            <Card className="mt-5 pt-4 mb-5 border-opacity-75 w-75 mx-auto">
              <ListGroup className="mt-3">
                <ul>Reservation Id : </ul>
                <p className="ms-5">Ratings</p>
                {/* <ul>Stars : </ul> */}
                <ul>Ratings : </ul>
                <ul>Customer Comment : </ul>
                <ul></ul>
              </ListGroup>

             

              <ListGroup className="mt-3">
                <ul className="mt-5">Reservation Id : </ul>
                <p className="ms-5">Ratings</p>
                {/* <ul>Stars : </ul> */}
                <ul>Ratings : </ul>
                <ul>Customer Comment : </ul>
                <ul></ul>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ratings;
