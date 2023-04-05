import axiosInstance from "../axios/axios-instance";
import { decodeToken } from "../utils/utils";


class DriverService {
  getVehicles(userName) {
    userName = decodeToken().user.email;
    return axiosInstance.get(
      "http://localhost:8080/api/v1/driver/" + userName + "/allVehicles"
    );
  }

  addVehicle(vehicle) {
    return axiosInstance.post("http://localhost:8080/api/v1/Vehicle/add-vehicle", vehicle);
  }

  getVehicleById(vehicleId) {
    return axiosInstance.get("http://localhost:8080/api/v1/Vehicle/getVehicleById/" + vehicleId);
  }

  deleteVehicleDetails(vehicleId) {
    return axiosInstance.delete("http://localhost:8080/api/v1/Vehicle/deleteVehicleById/" + vehicleId);
  }

  updateVehicleDetails(vehicleId,vehicleDetails){
    return axiosInstance.put("http://localhost:8080/api/v1/Vehicle/update/"+vehicleId,vehicleDetails);
  }

  addServiceAreas(vehicleId, serviceAreaId){
    return axiosInstance.post("http://localhost:8080/api/v1/Vehicle/add-service-areas",vehicleId,serviceAreaId);
  }
  // getDriver(){
  //     return axios.get(DRIVER_API_FOR_DRIVER_DETAILS);
  // }

  // addDriver(driver) {
  //   return axios.post(DRIVER_API_ADD_DRIVER, driver);
  // }
}

export default new DriverService();
