// import { Row } from "react-bootstrap";
import React, { Component } from "react";
import DriverService from "../../Service/DriverService";
import { withRouter } from "../../Components/withRouter";
import { Button } from "react-bootstrap";

class VehicleListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
    };
    this.updateVehicleDetails = this.updateVehicleDetails.bind(this);
    this.addVehicle = this.addVehicle.bind(this);
    this.deleteVehicleDetails = this.deleteVehicleDetails.bind(this);
  }

  updateVehicleDetails(vehicleId) {
    this.props.navigate(`/updateVehicleDetails/${vehicleId}`);
  }

  addVehicle() {
    this.props.navigate("/updateVehicleDetails/-1");
  }

  deleteVehicleDetails(vehicleId) {
    DriverService.deleteVehicleDetails(vehicleId).then((res) => {
      this.setState({
        vehicles: this.state.vehicles.filter(
          (vehicle) => vehicle.vehicleId !== vehicleId
        ),
      });
    });
  }

  componentDidMount() {
    DriverService.getVehicles().then((res) => {
      this.setState({ vehicles: res.data });
    });
  }

  render() {
    return (
      <div className="row">
        <table className="table table-dark table-hover table-bordered">
          <thead>
            <tr className="fw-bold table-active">
              <th>Id</th>
              <th>Number</th>
              <th>Ins_No</th>
              <th>Max_days</th>
              <th>Max_length</th>
              <th>Max_pas</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.vehicles.map((vehicle) => (
              <tr key={vehicle.vehicleNumber}>
                <td>{vehicle.vehicleId}</td>
                <td>{vehicle.vehicleNumber}</td>
                <td>{vehicle.insuranceNo}</td>
                <td>{vehicle.maxDays}</td>
                <td>{vehicle.maxLength}</td>
                <td>{vehicle.maxPassengers}</td>
                <td>{vehicle.type}</td>
                <td>
                  <button
                    onClick={() => this.updateVehicleDetails(vehicle.vehicleId)}
                    className="btn btn-outline-secondary my-auto me-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => this.deleteVehicleDetails(vehicle.vehicleId)}
                    className="btn btn-outline-danger my-auto"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button
          variant="outline-secondary"
          className="shadow-sm text-dark ms-3 col-3 mt-3 mb-2"
          onClick={this.addVehicle}
        >
          Add Vehicle
        </Button>
      </div>
    );
  }
}
export default withRouter(VehicleListComponent);