import * as axios from "axios";

const apiFireBase = axios.create({
  baseURL: "https://mybeerfavoris-default-rtdb.firebaseio.com/",
});
// eslint-disable-next-line 
export default {
  fetchFavoris: () =>
    apiFireBase
      .get("favoris.json")
      .then((response) => (response.data ? response.data : [])),
      saveFavoris: favoris=> apiFireBase.put('favoris.json', favoris)
};
