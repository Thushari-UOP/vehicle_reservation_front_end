import React from "react";
import { Col, Row, Card, Container, Table } from "react-bootstrap";
import PassengerDashSideBar from "./PassengerDashSideBar";
import Header from "../../components/Header"

function Histry() {
  return (
    <div>
      <Header/>
      
      <Container className="ms-0 mt-5" >
        <Row>
          <Col
            className=""
            style={{ marginLeft: "-12px", display: "contents" }}
          >
            <PassengerDashSideBar />
          </Col>
          <Col>
            <Card className="mt-5 ms-5 border-dark border-opacity-50">
              <Card.Header as="h5" className="text-center text-white-50 fw-bold" style={{backgroundColor: "darkslateblue"}}>
                Reservation Histry
              </Card.Header>
              <Card.Body className="ms-3 me-3 mb-3"style={{background:"#bfb8de",color:"darkslateblue"}}>
                <Table striped bordered hover size="sm">
                  <thead className="">
                    <tr>
                      <th>Res_No.</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Vehicle No</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>01/01/2023</td>
                      <td>08:30:AM</td>
                      <td>-Car-4568</td>
                      <td>Completed(example)</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>01/02/2023</td>
                      <td>08:30:AM</td>
                      <td>-Car-4568</td>
                      <td>Pending(example)</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Histry;
