import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import DriveDashSideBar from './DriveDashSideBar'
import Header from "../../Components/Header";

function Request() {
  return (

    <div>
      <Header />
      <Container className="ms-0 mt-5">
        <Row>
          <Col
            className=""
            style={{ marginLeft: "-12px", display: "contents" }}
          >
            <DriveDashSideBar />
          </Col>
          <Col>
            <Card className="mt-5 mb-lg-5 ms-4 border-dark border-opacity-50">



            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Request
