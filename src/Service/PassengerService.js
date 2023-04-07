import axios from "axios";

class PassengerService{
    addPassenger(passenger){
        return axios.post("http://localhost:8080/api/v1/Passenger/add",passenger);
    }

}

export default new PassengerService()