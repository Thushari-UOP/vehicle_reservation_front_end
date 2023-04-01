import React from 'react'

import Home from "./Pages/Home";
import Passenger from "./Pages/Passenger";
import Drive from "./Pages/Drive";
import About from "./Pages/About";
// import Contact from "./pages/Contact";

import SignInToRide from "./passenger/SignIn";
import SignInToDrive from "./driver/SignIn";
import PassengerRegistation from "./passenger/PassengerRegistation";
import DriveRegistation from "./driver/DriveRegistation";

import Hist from "./passenger/Dash/Histry";
import Booking from "./passenger/Dash/Booking";
import Profile from "./passenger/Dash/Profile";

import DriverProfile from "./driver/Dash/DriverProfile";
// import DriverCallender from "./driver/Dash/DriveCalander";
import Reservation from "./driver/Dash/Reservation";
import Request from "./driver/Dash/Request";
import Ratings from "./driver/Dash/Ratings";
import VehicleRegistation from './driver/components/VehicleRegistation';


import { Route, Routes } from "react-router-dom";
import UpdateDDetails from './driver/components/UpdateDDetails';
import UpdateVehicleDetails from './driver/components/UpdateVehicleDetails';
import UpdatePDetails from './passenger/componenets/UpdatePDetails';
// import VehicleListComponent from './driver/components/VehicleListComponent';


export default function Rout() {
  return (
    <div>
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/Passenger" element={<Passenger />} />
        <Route path="/Drive" element={<Drive />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}



        {/* Button SingIn & Registation */}
        <Route path="/Passenger/SignIn" element={<SignInToRide />} />
        <Route path="/Drive/SignIn" element={<SignInToDrive />} />
        <Route path="/Passenger/Registation"element={<PassengerRegistation/>}/>
        <Route path="/Driver/Registation" element={<DriveRegistation />} />


        {/* Passenger Dashbords */}
        <Route path="/Passenger/Hist" element={<Hist />} />
        <Route path="/Passenger/Profile" element={<Profile />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path='/updateUserDetails/:userName' component = {<UpdatePDetails/>}/>

        {/* Driver Dashbords */}
        <Route path="/Driver/Profile" element={<DriverProfile/>}/>
        {/* <Route path="/Driver/Calender" element={<DriverCallender/>}/> */}
        <Route path="/Driver/Reservation" element={<Reservation/>}/>
        <Route path="/Drive/Request" element={<Request/>}/>
        <Route path="/Drive/Ratings" element={<Ratings/>}/>
        <Route path='/Drive/VehicleRegistation' element={<VehicleRegistation/>}/>
        <Route path='/updateDriverDetails/:userName' component = {<UpdateDDetails/>}/>

        <Route path='/updateVehicleDetails/:vehicleId' component = {<UpdateVehicleDetails/>}/>
        {/* <Route path='/VehicleList/:id' component = {<VehicleListComponent/>}/> */}

        {/* <Route path="/Reservation/Map" element={<Map/>}/> */}

      </Routes>
    </div>
  )
}
