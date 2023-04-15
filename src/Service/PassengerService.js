import axios from "axios";
import axiosInstance from "../axios/axios-instance";
import { decodeToken } from "../utils/utils";

class PassengerService{
    addPassenger(passenger){
        return axios.post("http://localhost:8080/api/v1/Passenger/add",passenger);
    }

    getReservations(userName) {
        userName = decodeToken().user.passengerId;
        return axiosInstance.get("http://localhost:8080/api/v1/reservation/get-all-for-passenger/" +
        userName
        );
      }
}

export default new PassengerService()