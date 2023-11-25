import axios from "axios";

const axiosSecure = axios.create({ baseURL: "http://localhost:5000" });
const useAxiosSecure = () => {
  // request interceptor
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    console.log("stopped interceptor", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  });
  (err) => {
    return Promise.reject(err);
  };

  return axiosSecure;
};

export default useAxiosSecure;
