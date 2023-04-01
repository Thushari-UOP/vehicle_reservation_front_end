import React, { Component } from "react";
import { Button, Form, Card, FormText } from "react-bootstrap";
import Header from "../Components/Header";
import PassengerService from "../Service/PassengerService";
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

    console.log("passenger => " + JSON.stringify(passenger));

    axios
      .post("http://localhost:8080/api/v2/open/addPassenger", passenger)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  cancel() {
    this.props.nevigate("/Passenger");
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

  render() {
    return (
      <>
        <Header />
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

// import Header from "../Components/Header"
// import { Card, Form,  FormText, Button } from "react-bootstrap";
// import React, { useState } from 'react'
// import PassengerService from "../Service/PassengerService";

// const PassengerRegistation = () => {

//   const [passenger , setPassenger] = useState({
//     name: "",
//         userName: "",
//         password: "",
//         telephoneNo: "",
//         email: "",
//   })

//   const handleClick = (e) =>{
//     const value = e.target.value;
//     setPassenger({...passenger,[e.target.name]:value})
//   }

//   const addPassenger = (e)=>{
//     e.preventDegault();
//     PassengerService.addPassenger(passenger)
//     .then((response)=>{
//       console.log(response);
//     })
//     .catch((error)=>{
//       console.log(error);
//     });
//   };

//   return (
//           <div>
//             <Header />
//             <div
//               className="pt-5"
//               style={{
//                 background: "#17134526",
//                 height: "700px",
//                 marginTop: "40px",
//               }}
//             >
//               <Card
//                 className="align-items-md-center mt-3"
//                 style={{
//                   maxWidth: "500px",
//                   right: "0px",
//                   left: "0px",
//                   margin: "auto",
//                 }}
//               >
//                 <Form>
//                   <FormText>
//                     <h3 className="text-center mt-5">User Registation Form</h3>
//                   </FormText>

//                   <Form.Group controlId="name" className="mt-4">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                       required
//                       type="text"

//                       name="name"
//                       value={passenger.na}
//                       onChange={(e) => handleClick(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="userName" className="mt-2">
//                     <Form.Label>User Name</Form.Label>
//                     <Form.Control
//                       required
//                       type="text"

//                       name="userName"
//                       value={passenger.userName}
//                       onChange={(e) => handleClick(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="password" className="mt-2">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       required
//                       type="password"

//                       name="password"
//                       value={passenger.password}

//                       placeholder="password"
//                       onChange={(e) => handleClick(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="email" className="mt-2">
//                     <Form.Label>E-mail</Form.Label>
//                     <Form.Control
//                       required
//                       name="email"

//                       type="email"
//                       value={passenger.email}
//                       placeholder="example@gmail.com"
//                       onChange={(e) => handleClick(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="telephoneNo" className="mt-2">
//                     <Form.Label>Telephone No.</Form.Label>
//                     <Form.Control
//                       required
//                       type="text"
//                       name="telephoneNo"
//                       value={passenger.telephoneNo}
//                       onChange={(e) => handleClick(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mt-3 mb-3" id="passenger_form_checkbox">
//                     <Form.Check
//                       required
//                       label="Above details are true."
//                       feedback="You must agree before submittion"
//                       feedbackType="invalid"
//                     />
//                   </Form.Group>

//                   <Form.Group>
//                     {/* <Link to={"/Passenger/Profile"}> */}
//                     <Button
//                       type="submit"
//                       className="w-25 ms-5 me-3"
//                       variant="outline-secondary"
//                       onClick={addPassenger}
//                       size="sm"
//                     >
//                       Register
//                     </Button>

//                     <Button
//                       type="submit"
//                       className="w-25 ms-5 me-3"
//                       variant="outline-danger"
//                       onClick={this.cancel.bind(this)}
//                       size="sm"
//                     >
//                       Cancell
//                     </Button>
//                   </Form.Group>
//                 </Form>
//               </Card>
//             </div>
//           </div>
//         );
// }

// export default PassengerRegistation
