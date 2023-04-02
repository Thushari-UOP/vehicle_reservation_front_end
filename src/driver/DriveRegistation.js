import React, { Component } from "react";
import { Form, Card, FormText, Row, Col, Button } from "react-bootstrap";
import Header from "../Components/Header";
import { withRouter } from "../Components/withRouter";
import axios from "axios";

class DriveRegistation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      address: "",
      telephone: "",
      licenceNo: "",
      dob: "",
      email: "",
    };
    this.changefirstName = this.changefirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeTeleNo = this.changeTeleNo.bind(this);
    this.changeLicenceNo = this.changeLicenceNo.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDoB = this.changeDoB.bind(this);
  }

  addDriver = (e) => {
    e.preventDefault();
    let driver = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      password: this.state.password,
      address: this.state.address,
      telephone: this.state.telephone,
      licenceNo: this.state.licenceNo,
      dob: this.state.dob,
      email: this.state.email,
    };
    console.log("driver =>" + JSON.stringify(driver));

    axios
      .post("http://localhost:8080/api/v2/open/addDriver", driver)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  
  cancel() {
    this.props.navigate("/Drive");
  }

  changeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  changefirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  };
  changeTeleNo = (event) => {
    this.setState({ telephone: event.target.value });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changeLicenceNo = (event) => {
    this.setState({ licenceNo: event.target.value });
  };
  changeDoB = (event) => {
    this.setState({ dob: event.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <div
          className="pt-5 pb-5 align-items-md-center"
          style={{
            background: "#17134526",
            marginTop: "3%",
          }}
        >
          <Card
            className="align-items-md-center mt-3 mb-5"
            style={{
              maxWidth: "50%",
              right: "0px",
              left: "0px",
              margin: "auto",
            }}
          >
            <Form>
              <FormText>
                <h3 className="text-center mt-5 mb-5 text-decoration-underline">
                  Drivers Registation Form
                </h3>
              </FormText>
              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="userName"
                  className="mt-2"
                >
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type={"text"}
                    name="userName"
                    value={this.state.userName}
                    onChange={this.changeUserName}
                    size="sm"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="password"
                  className="mt-2"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={"password"}
                    name="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                    size="sm"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="firstName"
                  className="mt-2"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type={"text"}
                    name="fistName"
                    value={this.state.firstName}
                    onChange={this.changefirstName}
                    size="sm"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="lastName"
                  className="mt-2"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type={"text"}
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.changeLastName}
                    size="sm"
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="6" controlId="dob" className="mt-2">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type={"Date"}
                    name="dob"
                    value={this.state.dob}
                    onChange={this.changeDoB}
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="gender" className="mt-2">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
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
                  controlId="telephone"
                  className="mt-2"
                >
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    placeholder="xxx xxxxxxx"
                    type={"text"}
                    name="telephone"
                    value={this.state.telephone}
                    onChange={this.changeTeleNo}
                    size="sm"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="email"
                  className="mt-2"
                  size="sm"
                >
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control
                    type={"email"}
                    placeholder="example@gmail.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeEmail}
                    size="sm"
                  />
                </Form.Group>
              </Row>

              <Form.Group controlId="driverAddress" className="mt-2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder="Address"
                  className="mb-2"
                  name="Address"
                  value={this.state.address}
                  onChange={this.changeAddress}
                  size="sm"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="8"
                controlId="licenceNo"
                className="mt-2 mb-4 w-100"
              >
                <Form.Label>License No.</Form.Label>
                <Form.Control
                  type={"text"}
                  name="liceneceNo"
                  value={this.state.licenceNo}
                  onChange={this.changeLicenceNo}
                  size="sm"
                />
              </Form.Group>

              {/* <Form.Group controlId="driverPoto" className="mt-3 mb-5">
                <Form.Label>Driver Profile Photograph</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group> */}

              <Col className="mx-auto mb-5">
                <Button
                  type={"submit"}
                  className="w-25 ms-5 me-5"
                  variant="outline-secondary"
                  onClick={this.addDriver}
                  size="sm"
                >
                  Register
                </Button>

                <Button
                  type={"submit"}
                  className="w-25 ms-5 me-3"
                  variant="outline-danger"
                  onClick={this.cancel.bind(this)}
                  size="sm"
                >
                  Cancell
                </Button>
              </Col>
            </Form>
          </Card>
        </div>
        <div
          color="black"
          style={{
            height: "500px",
            marginTop: "-45%",
            background: "rgb(105, 105, 135)",
          }}
        ></div>
      </div>
    );
  }
}
export default withRouter(DriveRegistation);
