import React, { useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { Col, Row, Card, Container } from "react-bootstrap";
import PassengerDashSideBar from "./PassengerDashSideBar";
import { decodeToken } from "../../utils/utils";
import axiosInstance from "../../axios/axios-instance";
import { useState } from "react";

export default function Histry() {

  const [reservations, setReservations] = useState("");

  const userId = decodeToken().user.passengerId;

  const [show1, setShow1] = useState(false);

  const [reservationId, setReservationId] = useState("");
  const [driverDetails, setDriverDetails] = useState("");
  // const [reservationId, setReservationId] = useState("");

  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    await axiosInstance.get(`http://localhost:8080/api/v1/reservation/get-all-for-passenger/` + userId)
      .then((r) => {
        setReservations(r.data);
      });
  };

  const loadeDriverDetails = (reservationId) => {
    axiosInstance.get(`http://localhost:8080/api/v1/reservation/get-reservation-by-id/` + reservationId)
      .then((res) => {
        setDriverDetails(res.data.driver);
        console.log(reservationId);
        console.log(res.data);
      })
  }

  return (
    <div>
      <Container className="ms-0 mt-5" id="details">
        <Row>
          <Col
            className=""
            style={{ marginLeft: "-12px", display: "contents" }}
          >
            <PassengerDashSideBar />
          </Col>
          <Col>
            <h3 className="mt-5 ms-5 d-flex opacity-50">Reservations</h3>
            <hr className="mt-3 ms-5 opacity-50" />
            <Card className="mt-5 ms-5 mb-5 border-dark border-opacity-50" >

              <div className="mt-4">

                {reservations.length > 0 ? (
                  <div>
                    <div className="mt-2 mb-4 mx-auto w-100">
                      <Alert show={show1} variant="success" className="shadow col-11 mx-auto mb-4 border-0">
                        <h5 >Contact Details</h5>
                        <hr />
                        <p>Reservation Id : {reservationId} </p>
                        <p>Driver Name : {driverDetails.firstName} {driverDetails.lastName}</p>
                        <p>Telephone Number : {driverDetails.telephone}</p>
                        <p>E-mail : {driverDetails.email}</p>
                        <p>Date of Birth : {driverDetails.dob}</p>
                        <hr />
                        <div className="d-flex justify-content-end">
                          <Button onClick={() => { setShow1(false) }} variant="outline-success" className="me-5">Back</Button>
                        </div>
                      </Alert>
                      {reservations.map((reservation) =>

                        <Card className="shadow col-11 mx-auto mb-4 border-0" key={reservation.reservationId}>
                          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                          <Card.Body>
                            <Card.Title className="text-center"></Card.Title>
                            <Card.Text className="sm font fst-italic"></Card.Text>
                            <h6 className="ms-4">Reservation Id        : {reservation.reservationId}</h6>
                            <h6 className="ms-4">Date                  : {reservation.date}</h6>
                            <h6 className="ms-4">Number of Passengers  : {reservation.passengers}</h6>
                            <h6 className="ms-4">Number of Days        : {reservation.days}</h6>
                            <h6 className="ms-4">Pickup Location       : {reservation.pickupLocation}</h6>
                            <h6 className="ms-4">Drop Location         : {reservation.dropLocation}</h6>
                            {/* driver details display as alert. alert in above */}
                            {!show1 && <Button href="#details" variant="outline-success" size="sm" className="ms-4" onClick={() => { setShow1(true); setReservationId(reservation.reservationId); loadeDriverDetails(reservation.reservationId); }}>Driver Details</Button>}
                          </Card.Body>

                        </Card>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="border-0" style={{ minHeight: "300px" }}>
                    <h4 className="p-5 text-center">There Is No Reservatios</h4>
                  </div>
                )}

              </div>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
