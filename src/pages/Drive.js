// import React from "react";
// import { Carousel, Breadcrumb, Container, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import imag1 from "../Images/DrawingCar1.webp";
// import imag2 from "../Images/DrawingCar2.webp";
// import imag3 from "../Images/RoadMap.jpg";
// import Header from "../components/Header";

// function Drive() {
//   return (
//     <div className="">
//       <Header className="sticky-top" />
//       {/* BreadCrumb and SignIn, SignUp */}
//       <div>
//         {/* Carousel */}
//         <Carousel variant="dark">
//           <Carousel.Item className="row">
//             <img className="d-block cols-6" src={imag1} alt="" />
//             <div className="col-4">
//               <Link to="/SignIn">
//                 <Button variant="outline-dark" className="me-5 ms-auto">
//                   Sign In
//                 </Button>
//               </Link>
//               <Link to="/Driver/Registation">
//                 <Button variant="outline-dark" className="">
//                   Sign Up
//                 </Button>
//               </Link>
//             </div>
//             <Carousel.Caption className="row-col-2">
//               <h3>Have a Safe Jouny</h3>
//             </Carousel.Caption>
//           </Carousel.Item>

//           {/* <Carousel.Item>
//           <img className="d-block" src={imag2} alt="" />
//           <Carousel.Caption>
//             <h3>Shedual Your Reservation As Your Wish</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block" src={imag3} alt="" />
//           <Carousel.Caption>
//             <h3>Orgnize Your Trip Smart Way</h3>
//           </Carousel.Caption>
//         </Carousel.Item> */}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default Drive;


import React from "react";
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Drive() {
  return (
    <div className="">
            <Header className="sticky-top" />
      {/* BreadCrumb and Sign In, Sign Up */}

      <div className="p-5 align-items-md-center"
      style={{
        background: "#a4daff",
        backgroundImage:
          "url(https://www.netsolutions.com/insights/wp-content/uploads/2020/12/the-10-best-rideshare-apps-of-2021.webp)",
        height: "490px",
        backgroundColor: "#ecfbff",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundpositionx: "inherit",
        marginTop:"65px"
      }}>

        <div className="row p-4 ">
          <Link to="/Drive/SignIn"  style={{paddingLeft: "75%"}}>
            <Button variant="outline-dark" className="m-5 justify-content-end" >
              Sign In
            </Button>
          </Link>

          <Link to="/Driver/Registation" style={{paddingLeft: "75%"}}>
            <Button variant="outline-dark" className="m-5 justify-content-end" >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Drive;
