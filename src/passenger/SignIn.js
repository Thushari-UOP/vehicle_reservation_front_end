import React, { useState } from "react";
import { Card, Form, Button, FormText } from "react-bootstrap";
// import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const [jwt, setJwt] = useState("", "jwt");

  // console.log(userName);

  // function sendPassengerLoginRequest() {
  //   const reqBody = {
  //     userName: userName,
  //     password: password,
  //   };


  //   fetch("api/auth/login", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "post",
  //     body: JSON.stringify(reqBody),
  //   })
  //     .then((response) => {
  //       if(response.status ===200)
  //       return Promise.all([response.json(), response.headers]);
  //       else
  //       return Promise.reject("Invalid login attempt");
  //     })
  //     .then(([body, headers]) => {
  //       setJwt(headers.get("authorization"));
  //       window.location.href = "dashbord";
  //     }).catch((message) =>{
  //       alert(message);
  //     })
  // }

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
              <Form.Control
                required
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="text" value={password}
              onChange = {(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Form.Group>
              <Link to={""}>
                <Button
                  type="submit"
                  className="w-100 mt-5"
                >
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
