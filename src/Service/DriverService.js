import axios from 'axios';

// const driver_Id = "nky";

const DRIVER_API_GET_ALL = "http://localhost:8080/api/v1/Driver/nky/allVehicles";

const DRIVER_API_ADD_DRIVER = "http://localhost:8080/api/v1/Driver/add";

class DriverService{
    getVehicles(){
        return axios.get(DRIVER_API_GET_ALL);
    }

    addDriver(driver){
        return axios.post(DRIVER_API_ADD_DRIVER,driver);
    }
}



export default new DriverService()
