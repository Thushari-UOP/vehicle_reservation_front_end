import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import imag from "../Images/Car.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  Form,
  Button,
  FloatingLabel,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v9dbltn",
        "template_murhz1h",
        form.current,
        "DLOKdBHqeS90f3hHH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const heading_style = {
    color: "#1a0d27",
    fontWeight: "bold",
    fontFamily: "initial",
    textUnderlinePosition: "under",
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar shadow navbar-expand-lg container-fluid fixed-top"
        style={{background: "rgb(119 172 172)"}}
      >
        <Container>
          <div>
            <a className="navbar-brand" href="/" style={heading_style}>
              <img
                className="rounded-circle"
                src={imag}
                alt=""
                style={{ width: "95px",marginLeft:"-60px" }}
                
              />
            </a>
          </div>
          <Navbar.Brand href="/" style={heading_style}>VRSys HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/passenger" style={heading_style}>RIDE</Nav.Link>
              <Nav.Link href="/drive" style={heading_style}>DRIVE</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about" style={heading_style}  className="me-5">About Us</Nav.Link>
              <Nav.Link eventKey={2} onClick={handleShow} style={heading_style}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
              <Form.Control
                type="email"
                name="user_email"
                placeholder="example@gmail.com"
              />
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
