import React, { useEffect, useState } from "react";
import PassengerDashSideBar from "./PassengerDashSideBar";
import { Col, Row, Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios/axios-instance";

export default function Booking() {
  const vehicle = ["CAR", "VAN", "BUS"];

  const [type, setType] = useState("");
  const [passangers, setPassangers] = useState("");
  const [date, setDate] = useState("");
  const [town, setTown] = useState("");
  const [dates, setDates] = useState("");

  const [areas, setAreas] = useState([]);

  const [sVehicles, setSVehicles] = useState("");

  const [driver, setDriver] = useState({});

  const [show, setShow] = useState(false);

  useEffect(() => {
    loadAreas();
  }, []);


  const loadAreas = async () => {
    await axiosInstance
      .get(`http://localhost:8080/api/v1/service-area/get-all`)
      .then((r) => {
        setAreas(r.data);
        console.log(r.data);
      });
  };

  const submit = async () => {
    console.log(type, passangers, date, dates, town);
    await axiosInstance
      .get(
        `http://localhost:8080/api/v1/Vehicle/search?type=${type}&passengers=${passangers}&date=${date}&dates=${dates}&town=${town}`
      )
      .then((res) => {
        setSVehicles(res.data.response);
        console.log(res.data.response);
      });
  };

  const getDriverDetails = async (vehicleId) => {
    console.log("vehicle Id " + vehicleId)
    await axiosInstance
      .get(`http://localhost:8080/api/v1/driver/get-driver/${vehicleId}`
      )
      .then((res) => {
        setDriver(res.data);
        console.log(res.data);
      });
  }

  const bookVehicle = async() =>{
    console.log("make reservation");
  }


  const SelectVehicle = vehicle.map((vehicle) => (
    <option key={vehicle}>{vehicle}</option>
  ));

  const selectAreas = areas.map((areas) => (
    <option key={areas.serviceAreaId} value={areas.serviceAreaId}>
      {areas.name}
    </option>
  ));


  return (
    <div>
      <div className="me-5 mt-5 row">
        <Col style={{ marginLeft: "-12px", display: "contents" }}>
          <PassengerDashSideBar />
        </Col>
        <Col className="col-6">
          <Card className="mt-5 ms-5 border-opacity-50 mb-5">
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
                        Number Of Passengers
                      </Form.Label>
                      <Form.Control
                        onChange={(event) => setPassangers(event.target.value)}
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
                  <Col>
                    <Form.Group
                      controlId="reservationForm.area"
                      className="mb-xl-5"
                    >
                      <Form.Label className="mb-2 mx-1">
                        Searching area
                      </Form.Label>
                      <Form.Select
                        onChange={(event) => setTown(event.target.value)}
                        className=""
                      >
                        {selectAreas}
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
                    className="text-center text-black"
                    onClick={submit}
                    variant="outline-secondary"
                  >
                    Search Vehicle
                  </Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>

          {/* search vehicle display */}

          <div className="d-flex ms-3">
            <div className="mt-2 mb-3 d-flex">

              {sVehicles.length > 0 ? (

                <div className="mt-2 mb-3 d-flex">
                  <h4>Matching Vehicles</h4>

                  {sVehicles.map((sVehicles) =>
                    <Card style={{ width: "18rem" }} className="shadow ms-2 me-3" key={sVehicles.vehicleId} >
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title className="text-center">Available</Card.Title>
                        <Card.Text className="sm font fst-italic">
                          Before Your Booking Please Contact Driver And Make comfermation
                        </Card.Text>
                        <p>Vehicle Type : {sVehicles.type}</p>
                        <p>Vehicle Number : {sVehicles.vehicleNumber}</p>
                        <p>Maximum Length : {sVehicles.maxLength}km</p>
                        <p>Maximum Passengers : {sVehicles.maxPassengers}</p>
                        <p>Maximum Days : {sVehicles.maxDays} days</p>

                        {/* driver details display as alert. alert in bellow */}
                        {!show && <Button onClick={() => { setShow(true); getDriverDetails(sVehicles.vehicleId) }}>Driver Details</Button>}

                      </Card.Body>
                    </Card>
                  )}
                </div>

              ) : (
                <p>No Matching Vehicles</p>

              )}
            </div>
          </div>
          <div >
            <Alert show={show} variant="success" >
              <h5 >Selected Driver Details</h5>
              <hr />
              <p >Name : {driver.firstName} {driver.lastName}</p>
              <p>Telephone Number : {driver.telephone}</p>
              <p>E-mail : {driver.email}</p>
              <p>Date of Birt : {driver.dob}</p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success" className="me-5">
                  Back
                </Button>
                <Button variant="outline-success" className="me-5" onClick={bookVehicle}>
                  Book
                </Button>
              </div>
            </Alert>
          </div>
        </Col>

      </div>
    </div>
  );
}
