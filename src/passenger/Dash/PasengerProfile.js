import React, { useEffect, useState } from "react";
import PassengerDashSideBar from "./PassengerDashSideBar";
import { Col, Row, Card, Container } from "react-bootstrap";
import axiosInstance from "../../axios/axios-instance";
import { decodeToken } from "../../utils/utils";

export default function Profile() {
  const [passenger, setPassenger] = useState({});

  useEffect(() => {
    console.log("first");
    loadUser();
  }, []);

  const userName = decodeToken().user.userName;

  const loadUser = async () => {
    const result = await axiosInstance.get(
      "http://localhost:8080/api/v1/Passenger/getPassenger/" + userName
    );
    setPassenger(result.data);
  };

  return (

    <div style={{
      backgroundImage:
        "url('https://media.istockphoto.com/id/1204990150/vector/happy-man-tourist-with-luggage-and-backpack-at-the-airport-vector-illustration.jpg?s=612x612&w=0&k=20&c=n7EY3zHhrOBnmTi7-Ji3xjYa9NirInW3-_zkbYOEStg=')",
        backgroundSize:"430px",
      backgroundPosition: "110% 80%",
      backgroundAttachment: "fixed",
      backgroundRepeat:"no-repeat",
      backgroundColor: "white"
    }}>
      <Container className="ms-0 mt-5">
        <Row>
          <Col
            className=""
            style={{ marginLeft: "-12px", display: "contents" }}
          >
            <PassengerDashSideBar />
          </Col>
          <Col>
          <h3 className="mt-5 ms-5 d-flex opacity-50">Passenger Profile</h3>
            <hr className="mt-3 ms-5 opacity-50" />
            <Card className="mt-5 ms-5 mb-5 shadow border-opacity-50" style={{backgroundColor:"#9495ca0f"}}>
              <div className="mt-4" >
              <Card.Body
                className="ms-4 mb-4 me-4"
                style={{color: "darkslateblue" }}
              >
                <Card.Subtitle className="text-decoration-underline mt-4">
                  Profile Details
                </Card.Subtitle>
                <br />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item col-12 mb-3">
                    Name : {passenger.name}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    User Name : {passenger.userName}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    E-mail : {passenger.email}
                  </li>
                  <li className="list-group-item col-12 mb-3">
                    Telephone No: {passenger.telephoneNo}
                  </li>
               
                </ul>
              </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
