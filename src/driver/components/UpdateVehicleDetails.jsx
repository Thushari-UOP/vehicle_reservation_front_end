import React, { Component } from "react";
import DriverService from "../../Service/DriverService";
import { Form, FormText, Col, Button, Card } from "react-bootstrap";
// import Header from '../../Components/Header';
import { withRouter } from "../../Components/withRouter";
import axiosInstance from "../../axios/axios-instance";
// import { useParams } from 'react-router-dom';
// import { withRouter } from '../../Components/withRouter';

class UpdateVehicleDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicleId: this.props.params.vehicleId,
      vehicleNumber: "",
      insuranceNo: "",
      maxDays: "",
      maxLength: "",
      maxPassengers: "",
      type: "",
    };
    this.vehicleNumberHandler = this.vehicleNumberHandler.bind(this);
    this.insuranceNoHandler = this.insuranceNoHandler.bind(this);
    this.maxDaysHandler = this.maxDaysHandler.bind(this);
    this.maxLengthHandler = this.maxLengthHandler.bind(this);
    this.maxPassengersHandler = this.maxPassengersHandler.bind(this);
    this.typeHandler = this.typeHandler.bind(this);
    this.updateVehicleDetails = this.updateVehicleDetails.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    axiosInstance
      .get(
        "http://localhost:8080/api/v1/Vehicle/getVehicleById/" +
          this.state.vehicleId
      )
      .then((res) => {
        let vehicle = res.data;
        this.setState({
          vehicleId: vehicle.vehicleId,
          insuranceNo: vehicle.insuranceNo,
          maxDays: vehicle.maxDays,
          maxLength: vehicle.maxLength,
          maxPassengers: vehicle.maxPassengers,
          type: vehicle.type,
        });
      });
  }

  updateVehicleDetails = (e) => {
    e.preventDefault();
    let vehicle = {
      vehicleId: this.state.vehicleId,
      vehicleNumber: this.state.vehicleNumber,
      insuranceNo: this.state.insuranceNo,
      maxDays: this.state.maxDays,
      maxLength: this.state.maxLength,
      maxPassengers: this.state.maxPassengers,
      type: this.state.type,
    };
    console.log("vehicle =>" + JSON.stringify(vehicle));
    console.log("vehicle => " + JSON.stringify(this.state.vehicleId));
    DriverService.updateVehicleDetails(vehicle, this.state.vehicleId).then(
      (res) => {
        this.props.navigate("/Driver/Profile");
      }
    );
  };

  vehicleNumberHandler = (event) => {
    this.setState({ vehicleNumber: event.target.value });
  };
  insuranceNoHandler = (event) => {
    this.setState({ insuranceNo: event.target.value });
  };
  maxDaysHandler = (event) => {
    this.setState({ maxDays: event.target.value });
  };
  maxLengthHandler = (event) => {
    this.setState({ maxLength: event.target.value });
  };
  maxPassengersHandler = (event) => {
    this.setState({ maxPassengers: event.target.value });
  };
  typeHandler = (event) => {
    this.setState({ type: event.target.value});
  };

  cancel() {
    this.props.navigate("/Driver/Profile");
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        <div className="mt-5 bg-black">
          <Card className="mx-auto">
            <Form className="mx-auto w-75">
              <FormText>
                <h5 className="font-monospace fw-bolder mt-5 text-decoration-underline">
                  Vehicle Updatetion Form
                </h5>
              </FormText>

              <Form.Group
                as={Col}
                md="6"
                controlId="vehicleNo"
                className="mt-2"
              >
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Control
                  required
                  checked
                  placeholder="VAN / CAR / BUS"
                  type={"text"}
                  name="type"
                  value={this.state.type}
                  onChange={this.typeHandler}
                  size="sm"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="vehicleNo"
                className="mt-2"
              >
                <Form.Label>Vehicle Number</Form.Label>
                <Form.Control
                  required
                  checked
                  type={"text"}
                  name="vehicleNumber"
                  value={this.state.vehicleNumber}
                  onChange={this.vehicleNumberHandler}
                  size="sm"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="7"
                controlId="insuranceNo"
                className="mt-3"
              >
                <Form.Label>Insurance Number</Form.Label>
                <Form.Control
                  required
                  type={"text"}
                  size="sm"
                  name="insuranceNo"
                  value={this.state.insuranceNo}
                  onChange={this.insuranceNoHandler}
                />
              </Form.Group>

              <Form.Group as={Col} md="7" controlId="maxDays" className="mt-3">
                <Form.Label>Maximum No of Days for a Trip</Form.Label>
                <Form.Control
                  required
                  type={"number"}
                  name="maxDays"
                  value={this.state.maxDays}
                  onChange={this.maxDaysHandler}
                  size="sm"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="7"
                controlId="maxLength"
                className="mt-3"
              >
                <Form.Label>Maximum length for a Trip</Form.Label>
                <Form.Control
                  required
                  type={"number"}
                  name="maxLength"
                  value={this.state.maxLength}
                  onChange={this.maxLengthHandler}
                  size="sm"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="7"
                controlId="maxPassengers"
                className="mt-3"
              >
                <Form.Label>Maximum No of Passengers</Form.Label>
                <Form.Control
                  required
                  type={"number"}
                  name="maxPassengers"
                  value={this.state.maxPassengers}
                  onChange={this.maxPassengersHandler}
                  size="sm"
                />
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
                <Form.Check
                  type="checkbox"
                  label="Above all details are true."
                />
              </Form.Group>

              <Form.Group className="row">
                <Button
                  type={"submit"}
                  className="mb-5 mt-5 ms-5 me-5 col-2"
                  onClick={this.updateVehicleDetails}
                >
                  Update Details
                </Button>
                <Button
                  type={"submit"}
                  className="mb-5 mt-5 ms-5 me-2 col-2"
                  onClick={this.cancel}
                >
                  Cancell
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
export default withRouter(UpdateVehicleDetails);
