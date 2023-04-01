import axios from "axios";

const PASSENGER_API = "http://localhost:8080/api/v1/Passenger";

class PassengerService{
    addPassenger(passenger){
        return axios.post(PASSENGER_API + '/add',passenger);
    }


}

export default new PassengerService()