import Home from "./pages/Home";
import Passenger from "./pages/Passenger";
import Drive from "./pages/Drive";
import About from "./pages/About";
import Contact from "./pages/Contact";

import SignInToRide from "./passenger/SignIn";
import SignInToDrive from "./driver/SignIn";
import PassengerRegistation from "./passenger/PassengerRegistation";
import DriveRegistation from "./driver/DriveRegistation";

import Hist from "./passenger/Dash/Histry";
import Booking from "./passenger/Dash/Booking";
import Profile from "./passenger/Dash/Profile";

import DriverProfile from "./driver/Dash/DriverProfile";
import DriverCallender from "./driver/Dash/DriveCalander";
import Reservation from "./driver/Dash/Reservation";
import Request from "./driver/Dash/Request";
import Ratings from "./driver/Dash/Ratings";
import { Route, Routes } from "react-router-dom";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">

      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/Passenger" element={<Passenger />} />
        <Route path="/Drive" element={<Drive />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Button SingIn & Registation*/}
        <Route path="/Passenger/SignIn" element={<SignInToRide />} />
        <Route path="/Drive/SignIn" element={<SignInToDrive />} />
        <Route path="/Passenger/Registation"element={<PassengerRegistation />}/>
        <Route path="/Driver/Registation" element={<DriveRegistation />} />
        {/* Passenger Dashbords */}
        <Route path="/Passenger/Hist" element={<Hist />} />
        <Route path="/Passenger/Profile" element={<Profile />} />
        <Route path="/Booking" element={<Booking />} />
        {/* Driver Dashbords */}
        <Route path="/Driver/Profile" element={<DriverProfile/>}/>
        <Route path="/Driver/Calender" element={<DriverCallender/>}/>
        <Route path="/Driver/Reservation" element={<Reservation/>}/>
        <Route path="/Drive/Request" element={<Request/>}/>
        <Route path="/Drive/Ratings" element={<Ratings/>}/>
        <Route path="/Reservation/Map" element={<Map/>}/>
      </Routes>
      <footer className="pb-0 mb-0 fixed-position">
        <div className="w-100 bg-black">
          <p className="text-light text-center">create by Thushari Herath</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
