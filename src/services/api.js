import axios from "axios";

const api = axios.create({
  baseURL: ` http://${process.env.REACT_APP_API_ADD}`,
});

export default api;
