import React, { Component } from "react";
import DriverService from "../../Service/DriverService";
import { Form, Col, Button, Card } from "react-bootstrap";
import { withRouter } from "../../Components/withRouter";
import { decodeToken } from "../../utils/utils";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Link } from "react-router-dom";

const optionsArray = [
  { key: "1", label: "Anamaduwa" },
  { key: "2", label: "Anuradhapura" },
  { key: "3", label: "Chilaw" },
  { key: "4", label: "Colombo" },
  { key: "5", label: "Dambulla" },
  { key: "6", label: "Galgamuwa" },
  { key: "7", label: "Gampaha" },
  { key: "8", label: "Ganewatta" },
  { key: "9", label: "Ja-Ela" },
  { key: "10", label: "Kandy" },
  { key: "11", label: "Kegall" },
  { key: "12", label: "Kekirawa" },
  { key: "13", label: "Kuliyapitiya" },
  { key: "14", label: "Kurunegala" },
  { key: "15", label: "Maho" },
  { key: "16", label: "Mathale" },
  { key: "17", label: "Mawathagama" },
  { key: "18", label: "Negombo" },
  { key: "19", label: "Pannala" },
  { key: "20", label: "Puttalam" },

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
        .then(() => {
          const { navigate } = this.props;
          navigate('/driver/profile');
        });
      console.log("vehicleUpdateDetails =>" + JSON.stringify(vehicleDetails));
    } else {
      console.log(this.state);
      console.log(vehicle);
      DriverService.addVehicle(vehicle)
        .then((res) => {
          if (res?.data === true) {
            alert("Vehicle Registation is compleate");
            const { navigate } = this.props;
            navigate('/driver/profile');
          }
        });
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
      return <h3 className="text-center">Update Vehicle Details</h3>
    } else {
      return <h3 className="text-center">Vehicle Registation</h3>
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
        <div className="mt-5" >
          <Card className="mt-5 ">
            <h3 className="mt-5 ms-5 d-flex opacity-50"> {this.getTitle()} </h3>
            <hr className="mt-1 ms-5 opacity-50" />
            <div className="ms-5" style={{
              backgroundImage:
                "url('https://www.hdfcergo.com/images/default-source/car-insurance/e-challan-system-for-traffic-law-enforcement.jpg')",
              backgroundPosition:"131% 198%",
              backgroundAttachment: "fixed",
              backgroundRepeat:"no-repeat"
            }}>
              <Form className="mx-auto ms-5">
                <Form.Group
                  as={Col}
                  md="5"
                  controlId="type"
                  className="mt-3"
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
                  md="5"
                  controlId="vehicleNumber"
                  className="mt-4"
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
                  md="5"
                  controlId="insuranceNo"
                  className="mt-4"
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

                <Form.Group as={Col} md="5" controlId="maxDays" className="mt-4">
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
                  md="5"
                  controlId="maxLength"
                  className="mt-4"
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
                  md="5"
                  controlId="maxPassengers"
                  className="mt-4"
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
                  md="5"
                  controlId="area"
                  className="mt-4"
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
                    className="mb-5 mt-5 ms-5 me-5 col-2 btn-light btn-outline-success"
                    onClick={this.updateVehicleDetails}
                  >
                    {this.getButtonTitle()}
                  </Button>
                  <Link to={"/driver/profile"} className="mb-5 mt-5 ms-5 me-2 col-2 ">
                    <Button
                      type={"button"}
                      className="btn-light btn-outline-success"
                    >
                      Cancell
                    </Button>
                  </Link>
                </Form.Group>
              </Form>
            </div>
          </Card>
        </div>
      </>
    );
  }
}
export default withRouter(UpdateVehicleDetails);
