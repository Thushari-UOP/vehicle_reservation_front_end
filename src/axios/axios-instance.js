import axios from "axios";

const axiosInstance = axios.create({
  timeout: 60000,
});

const requestHandler = (request) => {
  let token = localStorage.getItem("token");

  request.headers.Authorization = "Bearer " + token;

  return request;
};

const responseHandler = (response, err) => {
  if (response.status === 401) {
    window.location = "/login";
  }

  return response;
};

const errorHandler = (error) => {
  console.log(error.response);
  if (typeof error.response === typeof undefined) {
  } else if (error.response.status === 401) {
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
