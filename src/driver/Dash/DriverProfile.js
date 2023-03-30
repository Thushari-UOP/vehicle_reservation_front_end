// import React, { useEffect, useState } from 'react'
import DriveDashSideBar from "./DriveDashSideBar";
import {  Col, Row, Card, Container, Button } from "react-bootstrap";
import Header from "../../Components/Header"
// import VehicleListComponent from "../VehicleListComponent";
import VehicleListComponent from "../components/VehicleListComponent";

import React, { Component } from 'react'

export default class DriverProfile extends Component {

  render() {
    return (
        <div>
            <Header/>
            <Container className="ms-0 mt-5">
                <Row>
                    <Col
                        className=""
                        style={{ marginLeft: "-12px", display: "contents" }}
                    >
                        <DriveDashSideBar style={{height:"100%"}}/>
                    </Col>
                    <Col>
                        <Card className="mt-5 ms-5 mb-5 border-dark border-opacity-50">
                            <Card.Header as="h5" className="text-center text-white-50" style={{ backgroundColor: "darkslateblue" }}>
                                Driver Profile
                            </Card.Header>
                            <Card.Body className="ms-4 mb-4 me-4" style={{ background: "#bfb8de", color: "darkslateblue" }}>
                                <Card.Subtitle className="text-decoration-underline mt-4 fw-bold">
                                    Driver Details
                                </Card.Subtitle>
                                <br />
                                <ul className="list-group ">
                                    <span className='mx-auto mb-4' style={{ width: "150px", height: "150px", backgroundSize: "cover", backgroundImage: "url(https://img.freepik.com/premium-vector/driver-experience-symbol-man-driving-car-icon-isolated-white-background_176411-3003.jpg?w=360)" }} />
                                    <li className="list-group-item col-12 mb-3">First Name : </li>
                                    <li className="list-group-item col-12 mb-3">Last Name : </li>
                                    <li className="list-group-item col-12 mb-3">User Name : </li>
                                    <li className="list-group-item col-12 mb-3">Gender : </li>
                                    <li className="list-group-item col-12 mb-3">E-mail : </li>
                                    <li className="list-group-item col-12 mb-3">Telephone No : </li>
                                    <li className="list-group-item col-12 mb-3">Address : </li>
                                    <li className="list-group-item col-12 mb-3">License No. : </li>
                                    <li style={{ listStyle: "none" }}></li>
                                </ul>
                                <Card.Subtitle className="text-decoration-underline mt-4 mb-4 fw-bold">
                                    Vehicle Details
                                </Card.Subtitle>

                                <VehicleListComponent/>

                            </Card.Body>
                        <Col className="ms-5 mb-4 me-5">
                            <Button className="w-25 ms-5 me-5" variant="outline-secondary" size="sm">Add New Vehicle</Button>
                            <Button className="w-25 ms-5 me-5" variant="outline-secondary" size="sm">Remove Vehicle</Button>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
  }
}



// function DriverProfile() {   
//     return (
//         <div>
//             <Header/>
//             <Container className="ms-0 mt-5">
//                 <Row>
//                     <Col
//                         className=""
//                         style={{ marginLeft: "-12px", display: "contents" }}
//                     >
//                         <DriveDashSideBar style={{height:"100%"}}/>
//                     </Col>
//                     <Col>
//                         <Card className="mt-5 ms-5 mb-5 border-dark border-opacity-50">
//                             <Card.Header as="h5" className="text-center text-white-50" style={{ backgroundColor: "darkslateblue" }}>
//                                 Driver Profile
//                             </Card.Header>
//                             <Card.Body className="ms-4 mb-4 me-4" style={{ background: "#bfb8de", color: "darkslateblue" }}>
//                                 <Card.Subtitle className="text-decoration-underline mt-4 fw-bold">
//                                     Driver Details
//                                 </Card.Subtitle>
//                                 <br />
//                                 <ul className="list-group ">
//                                     <span className='mx-auto mb-4' style={{ width: "150px", height: "150px", backgroundSize: "cover", backgroundImage: "url(https://img.freepik.com/premium-vector/driver-experience-symbol-man-driving-car-icon-isolated-white-background_176411-3003.jpg?w=360)" }} />
//                                     <li className="list-group-item col-12 mb-3">First Name : </li>
//                                     <li className="list-group-item col-12 mb-3">Last Name : </li>
//                                     <li className="list-group-item col-12 mb-3">User Name : </li>
//                                     <li className="list-group-item col-12 mb-3">Gender : </li>
//                                     <li className="list-group-item col-12 mb-3">E-mail : </li>
//                                     <li className="list-group-item col-12 mb-3">Telephone No : </li>
//                                     <li className="list-group-item col-12 mb-3">Address : </li>
//                                     <li className="list-group-item col-12 mb-3">License No. : </li>
//                                     <li style={{ listStyle: "none" }}></li>
//                                 </ul>
//                                 <Card.Subtitle className="text-decoration-underline mt-4 mb-4 fw-bold">
//                                     Vehicle Details
//                                 </Card.Subtitle>

//                                 <VehicleListComponent/>

//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
                
//             </Container>
//         </div>
//     )

// }

// export default DriverProfile
