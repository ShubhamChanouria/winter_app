import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'https://fakeshop-api.com'
  });

  export default baseUrl