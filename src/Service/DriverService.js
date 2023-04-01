import axios from 'axios';

const VEHICLE_API_GET_BY_ID = "http://localhost:8080/api/v1/Vehicle/getVehicleById";

const DRIVER_API_GET_ALL_VEHICLES = "http://localhost:8080/api/v1/Driver";

const DRIVER_API_ADD_DRIVER = "http://localhost:8080/api/v1/Driver/add";

const DRIVER_API_FOR_ADD_VEHICLE = "http://localhost:8080/api/v1/Vehicle/addVehicle";

const VEHICLE_DELETE_BY_ID = "http://localhost:8080/api/v1/Vehicle/deleteVehicleById";

class DriverService{
    getVehicles(userName){
        userName="lkfauo";
        return axios.get(DRIVER_API_GET_ALL_VEHICLES + '/'+ userName + '/allVehicles');
    }

    addVehicle(vehicle){
        return axios.post(DRIVER_API_FOR_ADD_VEHICLE,vehicle);
    }

    getVehicleById(vehicleId){
        return axios.get(VEHICLE_API_GET_BY_ID + '/' + vehicleId);
    }

    deleteVehicleDetails(vehicleId){
        return axios.delete(VEHICLE_DELETE_BY_ID + '/' + vehicleId);
    }
    // getDriver(){
    //     return axios.get(DRIVER_API_FOR_DRIVER_DETAILS);
    // }

    addDriver(driver){
        return axios.post(DRIVER_API_ADD_DRIVER,driver);
    }
}



export default new DriverService()
