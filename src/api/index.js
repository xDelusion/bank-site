import axios from "axios";

const instance = axios.create({
  baseURL: "https://coded-projects-api.herokuapp.com/api/auth/v3",
});

export default instance;
