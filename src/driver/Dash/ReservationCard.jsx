import React from 'react'
import { Col,Row, } from 'react-bootstrap'

const reservation = [{ ReservationId: String }, { VehicleId: String }, { VehicleNo: String }, { Pickup: String }, { Drop: String }, { Passengers: Number }, { Days: Number }, { StartDay: Date }, { Time: TimeRanges }, { Status: String }];


export default function ReservationCard() {
    return (
        <div>
            <ul className="list-group list-group-flush" >
                <Row>
                    <Col className="list-group-item" >Reservation Id : {reservation.ReservationId}</Col>
                    <Col className="list-group-item">Vehicle No. : {reservation.VehicleId}</Col>
                </Row>
                <Row>
                    <Col className="list-group-item">Pickup Location : {reservation.Pickup}</Col>
                    <Col className="list-group-item">Drop Location :{reservation.Drop}</Col>
                </Row>
                <Row>
                    <Col className="list-group-item">Passengers :{reservation.Passengers}</Col>
                    <Col className="list-group-item">Days :{reservation.Days}</Col>
                </Row>
                <Row>
                    <Col className="list-group-item">Date :{reservation.StartDay}</Col>
                    <Col className="list-group-item">Time :{reservation.Time}</Col>
                    <Col className="list-group-item">Status :{reservation.Status}</Col>
                </Row>
            </ul>

        </div>
    )
}
