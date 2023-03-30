import axios from "axios";

const PASSENGER_API_ADD = "http://localhost:8080/api/v1/Passenger/add";

class PassengerService{
    addPassenger(passenger){
        return axios.post(PASSENGER_API_ADD,passenger);
    }
}

export default new PassengerService()