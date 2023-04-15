import React, { useEffect, useState } from "react";
import PassengerDashSideBar from "./PassengerDashSideBar";
import { Col, Row, Card, Form, Button, Alert } from "react-bootstrap";
import { decodeToken } from "../../utils/utils";
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
  const [vNo, setVehicleNo] = useState("");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [vId, setVehId] = useState("");
  const [date2, setDate2] = useState("");
  const [days2, setDays2] = useState("");
  const [passangers2, setPassangers2] = useState();
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [error, setError] = useState("");

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

  const search = async () => {
    console.log("search details " + type, passangers, date, dates, town);
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

  const bookVehicle = async () => {
    console.log("make reservation");
    const reqBody = {
      date: date2,
      days: days2,
      passengers: passangers2,
      dropLocation: pickup,
      pickupLocation: drop,
      fkPassengerId: decodeToken().user.passengerId,
      fkVehicleId: vId
    };
    console.log(reqBody);
    axiosInstance.post(`http://localhost:8080/api/v1/reservation/create`, reqBody)
      .then((r) => {
        console.log(r);
        alert(r.data.message);
      });

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
      <div className="mt-5 row">

        <Col style={{ marginLeft: "-12px", display: "contents" }}>
          <PassengerDashSideBar />
        </Col>

        <Col className="">

          <div style={{
            backgroundImage:
              "url('https://res.cloudinary.com/comparis-cms/image/upload/c_fill,g_center,w_256,ar_1,f_auto,q_auto/v1623330489/carfinder/2ndlevelpage/USPs/USP2_g4f4jf.svg')",
            backgroundSize: "340px",
            backgroundPosition: "100% 100%",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat"
          }}>
            <h3 className="mt-5 ms-5 d-flex opacity-50">Search Vehicles And Book</h3>
            <hr className="mt-3 ms-5 opacity-50" />
            <Card className="mt-5 ms-5 border-opacity-50 mb-5 w-50">
              {/* <Card.Header as="h5" className="text-center text-white-50 fw-bold" style={{ backgroundColor: "darkslateblue" }}>
              Search Vehicles
            </Card.Header> */}
              <div className="mt-3">
                <Card.Body className="ms-3 me-3 mb-3" style={{ background: "rgb(174 213 199)", color: "darkslateblue" }} >
                  <h6 className="text-dark mt-2">Select all feild and search a vehicle</h6>
                  <Form className="container">
                    <Row className="mt-4">
                      <Col>
                        <Form.Group controlId="reservationForm.vehicleType">
                          <Form.Label className="mx-1"> Vehicle Type </Form.Label>
                          <Form.Select className="mb-4" onChange={(event) => setType(event.target.value)}>
                            {SelectVehicle}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="reservationForm.noOfPassengers">
                          <Form.Label className=" mx-1">Number Of Passengers</Form.Label>
                          <Form.Control value={passangers} onChange={(event) => setPassangers(event.target.value)} type="number" className="mb-4"
                            onBlur={() => {
                              if (passangers < 1) {
                                setError("value should be positive");
                              } else {
                                setError("");
                              }
                            }} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <Form.Group controlId="reservationForm.date">
                          <Form.Label className="mx-1">Date</Form.Label>
                          <Form.Control onChange={(event) => setDate(event.target.value)} type="date" className="mb-4" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="reservationForm.noOfDays">
                          <Form.Label className="mx-1"> For how many days? </Form.Label>
                          <Form.Control type="number" placeholder="" onChange={(event) => setDates(event.target.value)} className="mb-4" onBlur={() => {
                            if (dates < 1) {
                              setError("value should be positive");
                            } else {
                              setError("");
                            }
                          }} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <Form.Group controlId="reservationForm.area" className="mb-4">
                          <Form.Label className=" mx-1">Searching area </Form.Label>
                          <Form.Select onChange={(event) => setTown(event.target.value)}>
                            {selectAreas}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* <Row> <Map/> </Row> */}
                    {error && <div className="mb-2" style={{ color: "red" }}>{error}</div>}
                    <Button type="button" className="text-center  text-black" onClick={search} variant="outline-secondary">
                      Search
                    </Button>

                  </Form>
                </Card.Body>
              </div>
            </Card>
          </div>
          {/* search vehicles display */}


          <div className="mt-2 mb-5">

            {sVehicles.length > 0 ? (
              <div>
                <h4 className="mb-4 ms-2 text-monospace">Matching Vehicles</h4>
                <div className="mt-2 mb-3 ms-2 d-flex w-100">

                  {sVehicles.map((sVehicles) =>
                    <Card className="shadow col-3 mx-auto" key={sVehicles.vehicleId}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title className="text-center">Available</Card.Title>
                        <Card.Text className="sm font fst-italic"> Before Your Booking Please Contact Driver And Make comfermation </Card.Text>
                        <p>Vehicle Type : {sVehicles.type}</p>
                        <p>Vehicle Number : {sVehicles.vehicleNumber}</p>
                        <p>Maximum Length : {sVehicles.maxLength}km</p>
                        <p>Maximum Passengers : {sVehicles.maxPassengers}</p>
                        <p>Maximum Days : {sVehicles.maxDays} days</p>
                        {/* driver details display as alert. alert in bellow */}
                        {!show1 && <Button variant="outline-success" size="sm" className="ms-1" onClick={() => { setShow1(true); getDriverDetails(sVehicles.vehicleId); setVehId(sVehicles.vehicleId); setVehicleNo(sVehicles.vehicleNumber) }}>Driver Details</Button>}
                      </Card.Body>
                    </Card>
                  )}
                </div>
              </div>
            ) : (
              <h6 className="ms-5" >There Is No Matching Vehicles</h6>
            )}
          </div>


          <div className="row w-100 ms-3">
            <Alert show={show1} variant="success" className="col-5 me-3">
              <h5 >Selected Driver Details</h5>
              <hr />
              <p>Vehicle Number : {vNo} </p>
              <p>Name : {driver.firstName} {driver.lastName}</p>
              <p>Telephone Number : {driver.telephone}</p>
              <p>E-mail : {driver.email}</p>
              <p>Date of Birth : {driver.dob}</p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => { setShow1(false); setShow2(false) }} variant="outline-success" className="me-5">Back</Button>
                {!show2 && <Button variant="outline-success" className="me-5" onClick={() => { setShow2(true) }}>Make Reservation</Button>}
              </div>
            </Alert>

            <Alert show={show2} variant="success" className="col-6 ms-4">
              <h5 >Reservation Details</h5>
              <hr />
              <Form className="w-75 mx-auto">
                <Form.Group controlId="date2">
                  <Form.Label className="mb-2 mx-1 mt-2">Date</Form.Label>
                  <Form.Control value={date2} required onChange={(event) => setDate2(event.target.value)} name="date2" type="date" className="mb-4" />
                </Form.Group>

                <Form.Group controlId="days2">
                  <Form.Label className="mb-2 mx-1 mt-2">Number Of Days</Form.Label>
                  <Form.Control value={days2} required onChange={(event) => setDays2(event.target.value)} name="days2" type="number" className="mb-4" />
                </Form.Group>

                <Form.Group controlId="passengers2">
                  <Form.Label className="mb-2 mx-1 mt-2">Number Of Passengers</Form.Label>
                  <Form.Control required onChange={(event) => setPassangers2(event.target.value)} name="passengers2" type="number" className="mb-4" />
                </Form.Group>

                <Form.Group controlId="pickup">
                  <Form.Label className="mb-2 mx-1 mt-2">Pickup Location</Form.Label>
                  <Form.Control placeholder="pickup location name" onChange={(event) => setPickup(event.target.value)} name="pickup" type="text" className="mb-4" />
                </Form.Group>

                <Form.Group controlId="drop" required>
                  <Form.Label className="mb-2 mx-1 mt-2">Drop Location</Form.Label>
                  <Form.Control placeholder="drop location name" onChange={(event) => setDrop(event.target.value)} name="drop" type="text" className="mb-4" />
                </Form.Group>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow2(false)} variant="outline-success" className="me-5">Back</Button>
                  {<Button variant="outline-success" className="me-5" onClick={() => { bookVehicle() }}>Book</Button>}
                </div>
              </Form>
            </Alert>
          </div>
        </Col>

      </div>
    </div>
  );
}
