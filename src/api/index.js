import axios from "axios";

const instance = axios.create({
  baseURL: "https://coded-projects-api.herokuapp.com/api/auth/v3/register",
});

export default instance;
