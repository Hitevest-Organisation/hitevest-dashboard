import axios from "axios";
// Next we make an 'instance' of it
const AxiosInstance = axios.create({
  baseURL: "https://www.api.hitevest.com/api",
  timeout: 10000,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default AxiosInstance;
