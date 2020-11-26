import axios from "axios";

const api = axios.create({
  baseURL: "http://187.180.124.42:34939",
});

export default api;
