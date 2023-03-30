import React, { Component } from 'react'
import { Form , FormText, Col, Row, Button} from 'react-bootstrap'

export default class VehicleRegistation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          vehicles: [],
        };
      }
      
    render() {
        return (
            <div>
                <Form>
                    <FormText>
                        <h6 className="text-dark mt-5 text-decoration-underline">Vehicle Details</h6>
                    </FormText>

                    <Row>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="vehicleType"
                            className="mt-2"
                        >
                            <Form.Label>Vehicle Type</Form.Label>
                            <Form.Select
                                required
                                aria-label="Floating label select example"
                                size="sm"
                            >
                                <option value="male">Car</option>
                                <option value="female">Van</option>
                                <option value="female">Bus</option>
                                <option value="female">Cab</option>
                                <option value="female">Other</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="vehicleNo"
                            className="mt-2"
                        >
                            <Form.Label>Vehicle No.</Form.Label>
                            <Form.Control required checked type="text" size="sm" />
                        </Form.Group>
                    </Row>

                    <Form.Group
                        as={Col}
                        md="7"
                        controlId="insuranceNo"
                        className="mt-3"
                    >
                        <Form.Label>Insurance No.</Form.Label>
                        <Form.Control required type="text" size="sm" />
                    </Form.Group>

                    <Form.Group as={Col} md="7" controlId="maxDays" className="mt-3">
                        <Form.Label>Maximum No of Days for a Trip</Form.Label>
                        <Form.Control required type="number" size="sm" />
                    </Form.Group>

                    <Form.Group as={Col} md="7" controlId="maxLength" className="mt-3">
                        <Form.Label>Maximum length for a Trip</Form.Label>
                        <Form.Control required type="number" size="sm" />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        md="7"
                        controlId="maxPassengers"
                        className="mt-3"
                    >
                        <Form.Label>Maximum No of Passengers</Form.Label>
                        <Form.Control required type="number" size="sm" />
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
                        <Form.Check type="checkbox" label="Above all details are true." />
                    </Form.Group>

                    <Form.Group>
                        <Button type="submit" className="w-100 mb-5 mt-5">
                            Register as a Driver
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
