import React, { Component } from "react";
import { Button, Form, Card, FormText } from "react-bootstrap";
import { withRouter } from "../Components/withRouter";
import axios from "axios";

class PassengerRegistation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      userName: "",
      password: "",
      telephoneNo: "",
      email: "",
    };
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.telephoneChangeHandler = this.telephoneChangeHandler.bind(this);
    this.emaiChangeHandler = this.emaiChangeHandler.bind(this);
    this.addPassenger = this.addPassenger.bind(this);
  }

  addPassenger = (e) => {
    e.preventDefault();
    let passenger = {
      name: this.state.name,
      userName: this.state.userName,
      password: this.state.password,
      telephoneNo: this.state.telephoneNo,
      email: this.state.email,
    };

    console.log("passenger login => " + JSON.stringify(passenger));

    axios
      .post("http://localhost:8080/api/v2/open/add-passenger", passenger)
      .then((r) => {
        console.log(r);
        if(r.data === true){
          alert("Registation is succesfull");
          const { navigate } = this.props;
          navigate('/passenger/sign-in');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  cancel() {
    const { navigate } = this.props;
    navigate('/passenger');
  }

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  userNameChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  };
  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  telephoneChangeHandler = (event) => {
    this.setState({ telephoneNo: event.target.value });
  };
  emaiChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, userName, password, telephoneNo, email } = this.state;
  //   if (name === '' || userName ==='' ||email === '' || password === '' || telephoneNo === '') {
  //     alert('Please fill out all fields');
  //   };
  // };
  

  render() {
    return (
      <>
        <div
          className="pt-5"
          style={{
            background: "#17134526",
            height: "700px",
            marginTop: "40px",
          }}
        >
          <Card
            className="align-items-md-center mt-3"
            style={{
              maxWidth: "500px",
              right: "0px",
              left: "0px",
              margin: "auto",
            }}
          >
            <Form>
              <FormText>
                <h3 className="text-center mt-5">User Registation Form</h3>
              </FormText>

              <Form.Group controlId="name" className="mt-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.nameChangeHandler}
                />
              </Form.Group>

              <Form.Group controlId="userName" className="mt-2">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.userName}
                  name="userName"
                  onChange={this.userNameChangeHandler}
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={this.state.password}
                  name="password"
                  placeholder="password"
                  onChange={this.passwordChangeHandler}
                />
              </Form.Group>

              <Form.Group controlId="email" className="mt-2">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  name="email"
                  value={this.state.email}
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={this.emaiChangeHandler}
                />
              </Form.Group>

              <Form.Group controlId="telephoneNo" className="mt-2">
                <Form.Label>Telephone No.</Form.Label>
                <Form.Control
                  type="text"
                  name="telephoneNo"
                  value={this.state.telephoneNo}
                  onChange={this.telephoneChangeHandler}
                />
              </Form.Group>

              <Form.Group className="mt-3 mb-3" id="passenger_form_checkbox">
                <Form.Check
                  label="Above details are true."
                  feedback="You must agree before submittion"
                  feedbackType="invalid"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Button
                  type="submit"
                  className="w-25 me-3 ms-4"
                  variant="outline-secondary"
                  onClick={this.addPassenger}
                  size="sm"
                >
                  Register
                </Button>

                <Button
                  type="submit"
                  className="w-25 ms-5 me-3"
                  variant="outline-danger"
                  onClick={this.cancel.bind(this)}
                  size="sm"
                >
                  Cancell
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
export default withRouter(PassengerRegistation);
