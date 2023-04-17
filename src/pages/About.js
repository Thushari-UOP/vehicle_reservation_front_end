import React from "react";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: "url(Images/auto-for-rent.jpg)",
        height: "530px",
        backgroundSize: "cover",
        backgroundpositionx: "inherit",
        marginTop: "65px",
      }}
      className="d-flex align-items-center justify-content-center "
    >
      <div className="text-center mx-5">
        <h1 className="fw-bold mb-5">HeLlOw EvErYoNe!</h1>
        <h3 className="mx-5">
          We are a website that provides transportation facilities We enable you
          to get and provide the services you need efficiently and easily. Are
          you ready!!!
        </h3>
        <hr className="m-3" />
        <h4 className="fw-bold">Further details please contact Us.</h4>
        <h5 className="mt-3 text-dark">you can esily send and email using Cantact us. </h5>

        <h5 className="mt-5">Telephone No: 01101010101</h5>
        <h5>email : thushariherath716@gmail.com</h5>
      </div>
    </div>
  );
}
