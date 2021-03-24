import * as axios from "axios";
import { FAVORIS_API_URL } from "./config";
import jwt from "jwt-decode";

const apiFireBase = axios.create({
  baseURL: FAVORIS_API_URL,
});
// eslint-disable-next-line
export default {
  fetchFavoris: () =>
    apiFireBase
      .get("favoris_" + jwt(localStorage.getItem("authToken")).pseudo + ".json")
      .then((response) => (response.data ? response.data : [])),
      
  saveFavoris: (favoris) =>
    apiFireBase.put(
      "favoris_" + jwt(localStorage.getItem("authToken")).pseudo + ".json",
      favoris
    )
};
