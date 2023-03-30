import React from "react";
import { Button, Form, Card, FormText } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function PassengerRegistation() {
  return (
    <>
    <Header />
    <div
      className="pt-5"
      style={{
        background: "#17134526",
        height: "700px",
        marginTop:"40px"
        }}
    >
      <Card className="align-items-md-center mt-3" style={{ maxWidth: "500px" , right:"0px",left:"0px",margin:"auto"}}>
        <Form>
          <FormText>
            <h3 className="text-center mt-5">User Registation Form</h3>
          </FormText>

          <Form.Group controlId="p_name" className="mt-4">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" />
          </Form.Group>

          <Form.Group controlId="p_userName" className="mt-2">
            <Form.Label>User Name</Form.Label>
            <Form.Control required type="text" />
          </Form.Group>

          <Form.Group controlId="p_password" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="Password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="p_email" className="mt-2">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="example@gmail.com"
            />
          </Form.Group>

          <Form.Group controlId="p_tele" className="mt-2">
            <Form.Label>Telephone No.</Form.Label>
            <Form.Control required type="text" />
          </Form.Group>

          <Form.Group className="mt-3 mb-3" id="passenger_form_checkbox">
            <Form.Check
              required
              type="checkbox"
              label="Above details are true."
              feedback="You must agree before submittion"
              feedbackType="invalid"
            />
          </Form.Group>

          <Form.Group>
            <Link to={"/Passenger/Profile"}>
            <Button type="submit" className="w-100 mb-4">
              Register
            </Button>
            </Link>
          </Form.Group>
        </Form>
      </Card>
    </div>
    </>
  );
}
