import axios from "axios";

const apiBeer = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

apiBeer.interceptors.request.use((req) => {
  //req.headers['Authorization'] = 'Bearer NOTRE_API_KEY'
  return req;
});

export default apiBeer;
