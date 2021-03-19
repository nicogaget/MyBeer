import axios from "axios";

export const apiBeer = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

apiBeer.interceptors.request.use((req) => {
  //req.headers['Authorization'] = 'Bearer NOTRE_API_KEY'
  return req;
});



export const apiBeerMap = (b) => ({
  img: b.img,
  name: b.name,
  details: b.alcool + "° Alc | " + b.color + " | " + b.country,
  description: b.appearance,
});

export default {
  searchBeers: (filter) => {
    const query =
      "?" +
      Object.keys(filter)
        .map((k) => `${k}=${filter[k]}&`)
        .join("");

    return apiBeer
      .get("search/beer" + query)
      .then((response) => response.data.results)
      .then((beersApi) => beersApi.map(apiBeerMap));
  },
};