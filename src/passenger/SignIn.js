import React from "react";
import { Card, Form, Button, FormText } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function SignIn() {
  return (
    <>
      <Header />

      <div
        className="p-5 align-items-md-center"
        style={{
          background: "#17134526",
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "560px",
          backgroundSize: "cover",
          marginTop: "50px",
        }}
      >
        <Card
          className="p-5"
          style={{
            background: "rgb(255 255 255 / 51%)",
            maxWidth: "350px",
          }}
        >
          <Form>
            <FormText>
              <h3 className="text-center mb-5 text-primary">Sign In Now</h3>
            </FormText>

            <Form.Group controlId="userName" className="mt-4">
              <Form.Label>User Name</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group controlId="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group>
              <Link to={"/Booking"}>
                <Button type="submit" className="w-100 mt-5">
                  Sign In
                </Button>
              </Link>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </>
  );
}
