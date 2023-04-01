import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Button, FormText } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signInSubmit = () => {
    axios
      .post("http://localhost:8080/api/v2/open/driver/login", {
        email: userName,
        password,
      })
      .then((r) => {
        console.log(r);
        if (r?.data?.success === true) {
          localStorage.setItem("token", r?.data?.response?.token);
          alert("Login Success");
          // /Passenger/Profile
          navigate("/Driver/Profile");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // console.log(myData);

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
          marginTop: "40px",
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                onChange={(event) => setUserName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Group>
                <Button
                  type="button"
                  className="w-100 mt-5"
                  onClick={signInSubmit}
                >
                  Sign In
                </Button>
              </Form.Group>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </>
  );
}
