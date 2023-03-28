import axios from 'axios';

// const driver_Id = "nky";

const USER_API_GET_ALL = "http://localhost:8080/api/v1/Driver/nky/allVehicles";

class DriverService{
    getVehicles(){
        return axios.get(USER_API_GET_ALL);
    }
}



export default new DriverService()
