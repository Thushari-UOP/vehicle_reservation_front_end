import React from "react";
import { Button, Form, Card, FormText, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

export default function PassengerRegistation() {
  
  return (
    
    <div>
      <Header/>
      <div
        className="p-5 align-items-md-center"
        style={{
          background: "#17134526",
          height: "1600px",
          marginTop:"40px"
        }}
      >
        <Card className="align-items-md-center mt-3" style={{ maxWidth: 600 , right:"0px",left:"0px",margin:"auto"}}>
          <Form>
            <FormText>
              <h3 className="text-center mt-5 mb-5 text-decoration-underline">
                Drivers Registation Form
              </h3>
            </FormText>

            <FormText>
              <h6 className="text-dark mt-3 text-decoration-underline">Driver Details</h6>
            </FormText>

            {/* Driver Details */}
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="driverUserName"
                className="mt-2"
              >
                <Form.Label>User Name</Form.Label>
                <Form.Control required type="text" size="sm" />
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="driverPassword"
                className="mt-2"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" size="sm" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="driverFName"
                className="mt-2"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" size="sm" />
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="driverLName"
                className="mt-2"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" size="sm" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="driverDoB"
                className="mt-2"
              >
                <Form.Label>Birth Day</Form.Label>
                <Form.Control
                  required
                  placeholder=""
                  type="Date"
                  size="sm"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="driverGender"
                className="mt-2"
              >
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  required
                  aria-label="Floating label select example"
                  size="sm"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="driverTele"
                className="mt-2"
              >
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  required
                  placeholder="xxx xxxxxxx"
                  type="text"
                  size="sm"
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="driverEmail"
                className="mt-2"
                size="sm"
              >
                <Form.Label>E-Mail</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  size="sm"
                />
              </Form.Group>
            </Row>

            <Form.Group controlId="driverAddress" className="mt-2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Line 1"
                className="mb-2"
                size="sm"
              />
              <Form.Control
                type="text"
                placeholder="Address Line 2"
                className="mb-2"
                size="sm"
              />
              <Form.Control
                type="text"
                placeholder="City"
                className="mb-2"
                size="sm"
              />
              <Form.Control
                type="text"
                placeholder="Distric"
                className="mb-2"
                size="sm"
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="7"
              controlId="driverLicenseNo"
              className="mt-3"
            >
              <Form.Label>License No.</Form.Label>
              <Form.Control required type="text" size="sm" />
            </Form.Group>

            <Form.Group controlId="driverPoto" className="mt-3">
              <Form.Label>Driver Profile Photograph</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>

            {/*Vehicle Details getting  */}

            <FormText>
              <h6 className="text-dark mt-5 text-decoration-underline">Vehicle Details</h6>
            </FormText>

            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="vehicleType"
                className="mt-2"
              >
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Select
                  required
                  aria-label="Floating label select example"
                  size="sm"
                >
                  <option value="male">Car</option>
                  <option value="female">Van</option>
                  <option value="female">Bus</option>
                  <option value="female">Treewiler</option>
                  <option value="female">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="vehicleNo"
                className="mt-2"
              >
                <Form.Label>Vehicle No.</Form.Label>
                <Form.Control required checked type="text" size="sm" />
              </Form.Group>
            </Row>

            <Form.Group
              as={Col}
              md="7"
              controlId="insuranceNo"
              className="mt-3"
            >
              <Form.Label>Insurance No.</Form.Label>
              <Form.Control required type="text" size="sm" />
            </Form.Group>

            <Form.Group as={Col} md="7" controlId="maxDays" className="mt-3">
              <Form.Label>Maximum No of Days for a Trip</Form.Label>
              <Form.Control required type="number" size="sm" />
            </Form.Group>

            <Form.Group as={Col} md="7" controlId="maxLength" className="mt-3">
              <Form.Label>Maximum length for a Trip</Form.Label>
              <Form.Control required type="number" size="sm" />
            </Form.Group>

            <Form.Group
              as={Col}
              md="7"
              controlId="maxPassengers"
              className="mt-3"
            >
              <Form.Label>Maximum No of Passengers</Form.Label>
              <Form.Control required type="number" size="sm" />
            </Form.Group>

            <Form.Group
              as={Col}
              md="7"
              controlId="maxPassengers"
              className="mt-3"
            >
              <Form.Label>Service Areas</Form.Label>
              <Form.Select
                required
                aria-label="Floating label select example"
                size="sm"
              >
                <option value="male"></option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-4" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Above all details are true." />
            </Form.Group>

            <Form.Group>
              <Button type="submit" className="w-100 mb-5 mt-5">
                Register as a Driver
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </div>
      <div
        color="black"
        style={{
          height: "760px",
          marginTop: "-760px",
          background: "rgb(105, 105, 135)",
        }}
      ></div>
    </div>
  );
}
