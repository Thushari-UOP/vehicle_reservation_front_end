import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import imag from "../Images/Car.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export default function Header() {
  // const DropdownComponent = props => (
  //   <div className="form-group col-md-6">
  //       <label>{props.labelName} :</label>
  //       <select className="form-control" name="{props.labelName}" onChange={props.onChange}>
  //           <option defaultValue>Select {props.labelName}</option>
  //           {
  //               props.options.map(option => (
  //                   <option key={option.id} value={option.id}>{option.name}</option>
  //               ))
  //           }
  //       </select>
  //   </div>
  // )

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v9dbltn','template_murhz1h', form.current, 'DLOKdBHqeS90f3hHH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const heading_style = {
    color: "#1a0d27",
    fontWeight: "bold",
    fontFamily: "initial",
    textUnderlinePosition: "under",
  };


  return (
    <div>
      <nav
        className="navbar shadow navbar-expand-lg container-fluid fixed-top"
        style={{ background: "rgb(119 172 172)", height: "65px" }}
      >
        <div className="container-fluid fixed-top">
          <div>
            <a className="navbar-brand" href="/" style={heading_style}>
              <img
                className="rounded-circle"
                src={imag}
                alt=""
                style={{ width: "95px" }}
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse container-fluid"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item p-3">
                <Link to="/" style={heading_style}>
                  Home
                </Link>
              </li>
              <li className="nav-item p-3">
                <Link to="/passenger" style={heading_style}>
                  Ride
                </Link>
              </li>
              <li className="nav-item p-3">
                <Link to="/drive" style={heading_style}>
                  Drive
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item p-3 pe-5">
                <Link to="/about" style={heading_style}>
                  About Us
                </Link>
              </li>
              <li className="nav-item p-3 pe-5">
                <Link onClick={handleShow} style={heading_style}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{ color: "darkslateblue" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-5 fw-bold text-decoration-underline">
            Hellow Every One
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="fst-italic mb-4">
            If you need any helps or If you like to share your idears please
            contact us
          </p>
          <Form className="container" ref={form} onSubmit={sendEmail}>
            <Form.Group
              className="mb-4 mx-4 align-content-center"
              controlId="formBasicEmail"
            >
              <Form.Label className="text-center fw-semibold">
                Email address
              </Form.Label>
              <Form.Control type="email" name="user_email" placeholder="example@gmail.com" />
              <Form.Text className="text-muted fst-italic fw-lighter">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-4 mx-4 align-content-center"
              controlId="ContactUsSubject"
            >
              <Form.Label className="text-center fw-semibold">
                Subject
              </Form.Label>
              <Form.Control placeholder="" type="text" name="user_subject" />

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3 mt-2"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="message"
                />
              </FloatingLabel>
            </Form.Group>

            <Button
              variant="outline-primary"
              className="mb-2 col-5"
              style={{ marginLeft: "30%" }}
              onClick={sendEmail}
              type="submit" 
              value="Send" 
            >
              Send
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
