import React, { Component } from "react";
import DriverService from "../../Service/DriverService";

export default class VehicleListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
    };
  }

  componentDidMount() {
    DriverService.getVehicles().then((res) => {
      this.setState({ vehicles: res.data });
    });

    console.log(this.componentDidMount);
  }

  render() {
    return (
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Vehicle Id</th>
              <th>Vehicle No</th>
              <th>Insuarence No</th>
              <th>Max_days</th>
              <th>Max_length</th>
              <th>Max_passengers</th>
              <th>Vehicle Type</th>
            </tr>
            </thead>
            <tbody>
              {this.state.vehicles.map((vehicles) => (
                <tr key={vehicles.vehicleId}>
                  <td>{vehicles.vehicleId}</td>
                  <td>{vehicles.vehicleNumber}</td>
                  <td>{vehicles.insuranceNo}</td>
                  <td>{vehicles.maxDays}</td>
                  <td>{vehicles.maxLength}</td>
                  <td>{vehicles.maxPassengers}</td>
                  <td>{vehicles.type}</td>
                </tr>
              ))}
            </tbody>
          
        </table>
      </div>
    );
  }
}

