import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import DriveDashSideBar from "./DriveDashSideBar";


function Request() {
  return (
    <div>
      <Container className="ms-0 mt-5">
        <Row>
          <Col
            className=""
            style={{ display: "contents"}}
          >
            <DriveDashSideBar />
          </Col>
          <Col>
            <Card className="mt-5 pt-4 mb-5 ms-4  border-opacity-75 w-25">
              <ListGroup>
                <ul>Vehicle No. :</ul>
                <ul>Pickup Location :</ul>
                <ul>Drop Location :</ul>
                <ul>Passengers :</ul>
                <ul>Days :</ul>
                <ul>Date :</ul>
                <ul>Time :</ul>
                <ul>Contact No :</ul>
              </ListGroup>
              <Button variant="outline-dark mt-2 ms-1 me-1" size="sm">Accept</Button>
              <Button variant="outline-dark mt-2 mb-2 ms-1 me-1" size="sm">Reject</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Request;
