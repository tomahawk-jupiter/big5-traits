import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/results",
  // baseURL: "https://big5-traits.herokuapp.com/api/results"
});

export default axiosInstance;
