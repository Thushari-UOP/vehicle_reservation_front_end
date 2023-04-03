// import React, { Component } from 'react'
// import { Form, FormText, Col, Button, Card } from 'react-bootstrap'
// import Header from '../../Components/Header';
// import { withRouter } from '../../Components/withRouter';
// import DriverService from '../../Service/DriverService';

// class VehicleRegistation extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             vehicleId: this.props.params.vehicleId,
//             vehicleNumber: "",
//             insuranceNo: "",
//             maxDays: "",
//             maxLength: "",
//             maxPassengers: "",
//             type: "",
//         };
//         this.vehicleNumberChangeHandle = this.vehicleNumberChangeHandle.bind(this);
//         this.insuranceNoChangeHandle = this.insuranceNoChangeHandle.bind(this);
//         this.maxDaysChangeHandle = this.maxDaysChangeHandle.bind(this);
//         this.maxLengthChangeHandle = this.maxLengthChangeHandle.bind(this);
//         this.maxPassengersChangeHandle = this.maxPassengersChangeHandle.bind(this);
//         this.vehicleTypeChangeHandle = this.vehicleTypeChangeHandle.bind(this);
//         this.addOrUpdateVehicle = this.addOrUpdateVehicle.bind(this);
//         this.cancel = this.cancel.bind(this);
//     }

//     componentDidMount() {

//         if (this.state.vehicleId === -1) {
//             return
//         } else {
//             DriverService.getVehiceleById(this.state.vehicleId).then((res) => {
//                 let vehicle = res.data;
//                 this.setState({
//                     vehicleNumber: vehicle.vehicleNumber,
//                     insuranceNo: vehicle.insuranceNo,
//                     maxDays: vehicle.maxDays,
//                     maxLength: vehicle.maxLength,
//                     maxPassengers: vehicle.maxPassengers,
//                     type: vehicle.type
//                 });
//             });
//             console.log(this.componentDidMount);
//         }
//     }

//     addOrUpdateVehicle = (e) => {
//         e.preventDefault();
//         let vehicle = {
//             vehicleNumber: this.state.vehicleNumber,
//             insuranceNo: this.state.insuranceNo,
//             maxDays: this.state.maxDays,
//             maxLength: this.state.maxLength,
//             maxPassengers: this.state.maxPassengers,
//             type: this.state.type,
//         };
//         console.log("vehicle =>" + JSON.stringify(vehicle));

//         if (this.state.vehicleId === -1) {
//             DriverService.addVehicle(vehicle).then((res) => {
//                 this.props.navigate('/Driver/Profile');
//             });
//         } else {
//             DriverService.updateVehicle(vehicle, this.sate.vehicleId).then(res => {
//                 this.props.navigate('/Driver/Profile');
//             });
//         }
//     }

//     getTitle() {
//         if (this.state.vehicleId === -1) {
//             return <h3 className="text-center">Add Vehicle</h3>
//         } else {
//             return <h3 className="text-center">Update Vehicle</h3>
//         }
//     }

//     vehicleNumberChangeHandle = (event) => {
//         this.setState({ vehicleNumber: event.target.value });
//     };

//     insuranceNoChangeHandle = (event) => {
//         this.setState({ insuranceNo: event.target.value });
//     };
//     maxDaysChangeHandle = (event) => {
//         this.setState({ maxDays: event.target.value });
//     };
//     maxLengthChangeHandle = (event) => {
//         this.setState({ maxLength: event.target.value });
//     };
//     maxPassengersChangeHandle = (event) => {
//         this.setState({ maxPassengers: event.target.value });
//     };
//     vehicleTypeChangeHandle = (event) => {
//         this.setState({ type: event.target.value });
//     };

//     cancel() {
//         this.props.navigate('/Driver/Profile');
//     }


//     render() {
//         return (

//             <>
//                 <Header />
//                 <div className='mt-5 bg-black'>
//                     <Card className='mx-auto' >
//                         <Form className='mx-auto w-75'>
//                             <FormText>
//                                 {
//                                 this.getTitle()
//                                 }
//                             </FormText>

//                             <Form.Group
//                                 as={Col}
//                                 md="6"
//                                 controlId="type"
//                                 className="mt-5"
//                             >
//                                 <Form.Label>Vehicle Type</Form.Label>
//                                 <Form.Control required checked placeholder='CAR/VAN/BUS' type={"text"} name="type" value={this.state.type} onChange={this.vehicleTypeChangeHandle} size="sm" />

//                             </Form.Group>

//                             <Form.Group
//                                 as={Col}
//                                 md="6"
//                                 controlId="vehicleNo"
//                                 className="mt-2"
//                             >
//                                 <Form.Label>Vehicle No.</Form.Label>
//                                 <Form.Control required checked type={"text"} name="vehicleNumber" value={this.state.vehicleNumber} onChange={this.vehicleNumberChangeHandle} size="sm" />
//                             </Form.Group>


//                             <Form.Group
//                                 as={Col}
//                                 md="7"
//                                 controlId="insuranceNo"
//                                 className="mt-3"
//                             >
//                                 <Form.Label>Insurance No.</Form.Label>
//                                 <Form.Control required type={"text"} size="sm" name='insuranceNo' value={this.state.insuranceNo} onChange={this.insuranceNoChangeHandle} />
//                             </Form.Group>

//                             <Form.Group as={Col} md="7" controlId="maxDays" className="mt-3">
//                                 <Form.Label>Maximum No of Days for a Trip</Form.Label>
//                                 <Form.Control required type={"number"} name="maxDays" value={this.state.maxDays} onChange={this.maxDaysChangeHandle} size="sm" />
//                             </Form.Group>

//                             <Form.Group as={Col} md="7" controlId="maxLength" className="mt-3">
//                                 <Form.Label>Maximum length for a Trip</Form.Label>
//                                 <Form.Control required type={"number"} name='maxLength' value={this.state.maxLength} onChange={this.maxLengthChangeHandle} size="sm" />
//                             </Form.Group>

//                             <Form.Group
//                                 as={Col}
//                                 md="7"
//                                 controlId="maxPassengers"
//                                 className="mt-3"
//                             >
//                                 <Form.Label>Maximum No of Passengers</Form.Label>
//                                 <Form.Control required type={"number"} name="maxPassengers" value={this.state.maxPassengers} onChange={this.maxPassengersChangeHandle} size="sm" />
//                             </Form.Group>

//                             <Form.Group
//                                 as={Col}
//                                 md="7"
//                                 controlId="maxPassengers"
//                                 className="mt-3"
//                             >
//                                 <Form.Label>Service Areas</Form.Label>
//                                 <Form.Control />
//                             </Form.Group>

//                             <Form.Group className="mt-4" controlId="formBasicCheckbox">
//                                 <Form.Check type="checkbox" label="Above all details are true." />
//                             </Form.Group>



//                             <Form.Group className='row'>
//                                 <Button type={"submit"} className="mb-5 mt-5 ms-5 me-5 col-2"
//                                     onClick={this.addOrUpdateVehicle}>
//                                     Save
//                                 </Button>
//                                 <Button type={"submit"} onClick={this.cancel.bind(this)} className="mb-5 mt-5 ms-5 me-2 col-2"
//                                 >
//                                     Cancell
//                                 </Button>
//                             </Form.Group>
//                         </Form>
//                     </Card>
//                 </div>
//             </>
//         )
//     }
// }
// export default withRouter(VehicleRegistation);