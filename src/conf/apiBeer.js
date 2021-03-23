import axios from "axios";

export const apiBeer = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

apiBeer.interceptors.request.use((req) => {
  const token = window.localStorage.getItem(["authToken"])
  req.headers['Authorization'] = 'Bearer '+token
  req.headers.get["Accept"] = "Application/ld+json";
  return req;
});

export const apiBeerMap = (b) => ({
  name: b.name,
  details: b.alcool + " Alc | " + b.color + " | " + b.country,
  description: b.appearance,
  img: b.img,
});

// eslint-disable-next-line
export default {
  searchBeers: (filter) => {
    const query =
      "?" +
      Object.keys(filter)
        .map((k) => `${k}=${filter[k]}&`)
        .join("");

    return apiBeer
      .get("/beers" + query)
      .then((response) => response.data["hydra:member"])
      .then((beersApi) => beersApi.map(apiBeerMap));
  },
};
