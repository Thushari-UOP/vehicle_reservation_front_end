import React, { Component } from "react";
import DriverService from "../../Service/DriverService";
import { Form, FormText, Col, Button, Card } from "react-bootstrap";
import { withRouter } from "../../Components/withRouter";
import axiosInstance from "../../axios/axios-instance";
import { Link } from "react-router-dom";
import { decodeToken } from "../../utils/utils";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const optionsArray = [
  { key: "1", label: "Kurunegala" },
  { key: "2", label: "Colombo" },
  { key: "3", label: "Jaffna" },
  { key: "7", label: "Kegall" },
  { key: "8", label: "Kandy" },
  { key: "6", label: "Galagedara" },
];

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
      fkDriverId: decodeToken().user.driverId,
      serviceAreaId: []
    };
    this.vehicleNumberHandler = this.vehicleNumberHandler.bind(this);
    this.insuranceNoHandler = this.insuranceNoHandler.bind(this);
    this.maxDaysHandler = this.maxDaysHandler.bind(this);
    this.maxLengthHandler = this.maxLengthHandler.bind(this);
    this.maxPassengersHandler = this.maxPassengersHandler.bind(this);
    this.typeHandler = this.typeHandler.bind(this);
    this.areaHandler = this.areaHandler.bind(this);
    this.updateVehicleDetails = this.updateVehicleDetails.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    DriverService.getVehicleById(this.state.vehicleId).then((res) => {
      let vehicle = res.data;
      this.setState({
        vehicleId: vehicle.vehicleId,
        vehicleNumber: vehicle.vehicleNumber,
        insuranceNo: vehicle.insuranceNo,
        maxDays: vehicle.maxDays,
        maxLength: vehicle.maxLength,
        maxPassengers: vehicle.maxPassengers,
        type: vehicle.type,
        fkDriverId: decodeToken().user.driverId,
      });
    });
  }

  updateVehicleDetails = (e) => {
    e.preventDefault();
    let vehicleDetails = {
      insuranceNo: this.state.insuranceNo,
      maxDays: this.state.maxDays,
      maxLength: this.state.maxLength,
      maxPassengers: this.state.maxPassengers,
    };

    let vehicle = {
      vehicleNumber: this.state.vehicleNumber,
      insuranceNo: this.state.insuranceNo,
      maxDays: this.state.maxDays,
      maxLength: this.state.maxLength,
      maxPassengers: this.state.maxPassengers,
      type: this.state.type,
      fkDriverId: decodeToken().user.driverId,
      serviceAreas: this.state.serviceAreaId
    }

    if (this.state.vehicleId > -1) {
      DriverService.updateVehicleDetails(this.state.vehicleId, vehicleDetails)
      .then((res) => {
        this.props.navigate("/Driver/Profile");
      });
      console.log("vehicleUpdateDetails =>" + JSON.stringify(vehicleDetails));

    } else {
      console.log(this.state);
      console.log(vehicle);
      DriverService.addVehicle(vehicle);
    }
  };


  getButtonTitle() {
    if (this.state.vehicleId > -1) {
      return "Update Details";
    } else {
      return "Add Vehicle";
    }
  }

  getTitle() {
    if (this.state.vehicleId > -1) {
      return <h3 className="text-center">Update Vehicle</h3>
    } else {
      return <h3 className="text-center">Add Vehicle</h3>
    }
  }


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
    this.setState({ type: event.target.value });
  };
  areaHandler = (event) => {
    this.setState({ serviceAreaId: event });
    console.log(event);
  }


  render() {
    return (
      <>
        <div className="mt-5 bg-black">
          <Card className="mt-5">
            <Form className="mx-auto w-75 mt-5">
              <FormText className="mt-5 ms-5">
                {this.getTitle()}
              </FormText>

              <Form.Group
                as={Col}
                md="6"
                controlId="vehicleNo"
                className="mt-5"
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
                controlId="area"
                className="mt-3"
              >
                <Form.Label>Service Areas</Form.Label>
                <DropdownMultiselect
                  value={optionsArray.keys()}
                  handleOnChange={(e) => this.areaHandler(e)}
                  options={optionsArray}
                  name="area"
                />
              </Form.Group>

              <Form.Group className="mt-4" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Above all details are true."
                />
              </Form.Group>

              <Form.Group className="row">
                <Button
                  type={"button"}
                  className="mb-5 mt-5 ms-5 me-5 col-2"
                  onClick={this.updateVehicleDetails}
                >
                  {this.getButtonTitle()}
                </Button>
                <Link to={"/Driver/Profile"} className="mb-5 mt-5 ms-5 me-2 col-2">
                  <Button
                    type={"button"}

                    onClick={this.cancel}
                  >
                    Cancell
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
export default withRouter(UpdateVehicleDetails);
