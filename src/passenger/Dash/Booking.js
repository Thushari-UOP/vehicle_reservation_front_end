import React, { useState, useEffect } from "react";
import PassengerDashSideBar from "./PassengerDashSideBar";
import { Col, Row, Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import axiosInstance from "../../axios/axios-instance";
// import Map from "../../components/Map";
export default function Booking() {
  const vehicle = ["None..", "Car", "Van", "Bus", "Cab"];
  const towns = [
    "None..",
    "Colombo",
    "Kurunegala",
    "Kandy",
    "Badulla",
    "Matara",
    "Puttalam",
    "Thenmarachchi",
    "Kattankudy",
    "Matale",
    "Kalutara",
    "Mannar",
    "Panadura",
    "Beruwela",
    "Ja-Ela",
    "Vadamarachi-North",
    "Kelaniya",
    "Wattala",
    "Gampola",
    "Nuwara-Eliya",
    "Chilaw",
    "Eravur",
    "Hanwella",
    "Weligama",
    "Ambalangoda",
    "Ampara",
    "Kegalle",
    "Ambagamuwa",
    "Balangoda",
    "Hambanthota",
    "Tangalle",
    "Moneragala",
    "Horana",
    "Siyabalanduwa",
    "Minuwangoda",
    "Badarawela",
    "Haputale",
  ];

  const SelectVehicle = vehicle.map((vehicle) => <option>{vehicle}</option>);

  const selectNearestTowns = towns.map((towns) => <option>{towns}</option>);

  const [type, setType] = useState("");
  const [passangers, setPassangers] = useState("");
  const [date, setDate] = useState("");
  const [town, setTown] = useState("");

  const [dates, setDates] = useState("");

  const submit = () => {
    console.log(type, passangers, date, town);
    axiosInstance
      .get(
        `http://localhost:8080/api/v1/Vehicle/search?type=${type}&passengers=${passangers}&date=${date}&town=${town}&dates=${dates}`
      )
      .then((r) => {
        console.log(r);
      });
  };

  return (
    <div>
      <Header />
      <Container className="ms-0 mt-5">
        <Row>
          <Col style={{ marginLeft: "-12px", display: "contents" }}>
            <PassengerDashSideBar />
          </Col>
          <Col>
            <Card className="mt-5 ms-5 border-dark border-opacity-50">
              <Card.Header
                as="h5"
                className="text-center text-white-50 fw-bold"
                style={{ backgroundColor: "darkslateblue" }}
              >
                Search Vehicles
              </Card.Header>
              <Card.Body
                className="ms-3 me-3 mb-3"
                style={{ background: "#bfb8de", color: "darkslateblue" }}
              >
                <Form className="container">
                  <Row>
                    <Col>
                      <Form.Group controlId="reservationForm.vehicleType">
                        <Form.Label className="mb-2 mx-1 mt-5">
                          Vehicle Type
                        </Form.Label>
                        <Form.Select
                          className="mb-4"
                          onChange={(event) => setType(event.target.value)}
                        >
                          {SelectVehicle}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="reservationForm.noOfPassengers">
                        <Form.Label className="mb-2 mx-1 mt-5">
                          No. Of Passengers
                        </Form.Label>
                        <Form.Control
                          onChange={(event) =>
                            setPassangers(event.target.value)
                          }
                          type="number"
                          className="mb-4"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="reservationForm.date">
                        <Form.Label className="mb-2 mx-1">Date</Form.Label>
                        <Form.Control
                          onChange={(event) => setDate(event.target.value)}
                          type="date"
                          className="mb-4"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="reservationForm.noOfDays">
                        <Form.Label className="mb-2 mx-1">
                          For how many days?
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Maximum is 4"
                          onChange={(event) => setDates(event.target.value)}
                          className="mb-4"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    {/* <Col>
                      <Form.Group controlId="reservationForm.time">
                        <Form.Label className="mb-2 mx-1">Time</Form.Label>
                        <Form.Control type="time" className="" />
                      </Form.Group>
                    </Col> */}
                    <Col>
                      <Form.Group
                        controlId="reservationForm.nearestTowns"
                        className="mb-xl-5"
                      >
                        <Form.Label className="mb-2 mx-1">
                          Nearest Towns
                        </Form.Label>
                        <Form.Select
                          onChange={(event) => setTown(event.target.value)}
                          className=""
                        >
                          {selectNearestTowns}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Map/>
                  </Row> */}

                  <Link className="mx-auto mb-4">
                    <Button
                      type="button"
                      className="text-center text-white-50"
                      onClick={submit}
                      style={{ backgroundColor: "darkslateblue" }}
                    >
                      Search Vehicle
                    </Button>
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
