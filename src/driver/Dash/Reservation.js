import React from "react";
import { Container, Row, Col, Card, Alert, Button } from "react-bootstrap";
import DriveDashSideBar from "./DriveDashSideBar";
import axiosInstance from "../../axios/axios-instance";
import { decodeToken } from "../../utils/utils";
import { useEffect } from "react";
import { useState } from "react";

export default function Reservation() {
  const [reservations, setReservations] = useState("");

  const driverId = decodeToken().user.driverId;

  const [show1, setShow1] = useState(false);

  const [reservationId, setReservationId] = useState("");
  const [passengerDetails, setPassengerDetails] = useState("");

  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    await axiosInstance
      .get(
        `http://localhost:8080/api/v1/reservation/get-all-for-driver/` +
          driverId
      )
      .then((r) => {
        setReservations(r.data);
        console.log(r.data);
      });
  };

  const loadPassengerDetails = (reservationId) => {
    axiosInstance
      .get(
        `http://localhost:8080/api/v1/reservation/get-reservation-by-id/` +
          reservationId
      )
      .then((res) => {
        setPassengerDetails(res.data.passenger);
        console.log(reservationId);
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className="mt-5">
        <Container className="ms-0" id="details">
          <Row>
            <Col style={{ marginLeft: "-12px", display: "contents" }}>
              <DriveDashSideBar />
            </Col>
            <Col>
              <h3 className="mt-5 ms-5 d-flex opacity-50">Reservations</h3>
              <hr className="mt-3 ms-5 opacity-50" />
              <Card className="mt-5 ms-5 mb-5">
                <div className="mt-4">
                  {reservations.length > 0 ? (
                    <div>
                      <div className="mt-2 mb-4 mx-auto w-100">
                        <Alert
                          show={show1}
                          variant="success"
                          className="shadow col-11 mx-auto mb-4 border-0"
                        >
                          <h5>Contact Details</h5>
                          <hr />
                          <p>Reservation Id : {reservationId} </p>
                          <p>Driver Name : {passengerDetails.name}</p>
                          <p>
                            Telephone Number : {passengerDetails.telephoneNo}
                          </p>
                          <p>E-mail : {passengerDetails.email}</p>
                          <hr />
                          <div className="d-flex justify-content-end">
                            <Button
                              onClick={() => {
                                setShow1(false);
                              }}
                              variant="outline-success"
                              className="me-5"
                            >
                              Back
                            </Button>
                          </div>
                        </Alert>
                        
                        {reservations.map((reservation) => (
                          <Card
                            className="shadow col-11 mx-auto mb-4 border-0"
                            key={reservation.reservationId}
                          >
                            <Card.Body
                              className=""
                              style={{
                                color: "darkslateblue",
                                backgroundColor: "whitesmoke",
                              }}
                            >
                              <div className="">
                                <ul className="list-group ms-3 me-3">
                                  <Row>
                                    <Col className="fw-bold mb-3">
                                      Reservation Id : &nbsp;&nbsp;
                                      {reservation.reservationId}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col className="list-group-item">
                                      Pickup Location : &nbsp;&nbsp;
                                      {reservation.pickupLocation}
                                    </Col>
                                    <Col className="list-group-item">
                                      Drop Location : &nbsp;&nbsp; {reservation.dropLocation}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col className="list-group-item">
                                      Number of Passengers : &nbsp;&nbsp;{reservation.passengers}
                                    </Col>
                                    <Col className="list-group-item">
                                      Number of Days : &nbsp;&nbsp; {reservation.days}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col className="list-group-item">
                                      Date : &nbsp;&nbsp; {reservation.date}
                                    </Col>
                                    
                                  
                                    {/* <Col className="list-group-item">
                                      Status : {reservation.}
                                    </Col> */}
                                  </Row>
                                  <Row className="align-self-end mt-3 me-1">
                                  {!show1 && <Button href="#details" variant="outline-success" size="sm" className="ms-4" onClick={() => { setShow1(true); setReservationId(reservation.reservationId); loadPassengerDetails(reservation.reservationId); }}>Passenger Details</Button>}                             
                                    </Row>
                                </ul>
                              </div>
                            </Card.Body>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="border-0" style={{
                      minHeight: "300px" ,
                      backgroundImage:
                        "url('https://as1.ftcdn.net/v2/jpg/02/84/23/44/1000_F_284234478_inuvTHTN7Cimw1VpwAucece4krPu7Qdf.jpg')",
                      backgroundPosition:"22% 58%",
                      backgroundAttachment: "inherit",
                      backgroundSize:"119%",
                      backgroundRepeat:"no-repeat"
                    }}>
                      <h4 className="p-5 text-center">
                        There Is No Reservatios
                      </h4>
                    </div>
                  )}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
