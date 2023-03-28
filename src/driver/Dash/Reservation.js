import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import DriveDashSideBar from './DriveDashSideBar'
import ReservationCard from './ReservationCard'
import Header from "../../Components/Header";


export default function Reservation() {


    return (
        <div>
            <Header/>
            <div className='mt-5'>
                <Container className="ms-0">
                    <Row>
                        <Col
                            className=""
                            style={{ marginLeft: "-12px", display: "contents" }}
                        >
                            <DriveDashSideBar />
                        </Col>
                        <Col>
                            <Card className="mt-5 mb-lg-5 ms-4 border-dark border-opacity-50">
                                <Card.Header className="text-decoration-underline text-center fw-bold  mb-4" style={{ background: "#bfb8de", color: "darkslateblue" }}>
                                    Reservation Details
                                </Card.Header>
                                <Card.Body className="m-4" style={{ color: "darkslateblue", backgroundColor: "whitesmoke" }}>
                                    <hr/>
                                    <ReservationCard/>
                                    <hr className="mb-4"/>
                                    <ReservationCard/>
                                    <hr className="mb-4"/>
                                    <ReservationCard/>

                                    <hr />
                                </Card.Body>



                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

  

}
