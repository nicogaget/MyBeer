import * as axios from "axios";
import {FAVORIS_API_URL} from './config'

const apiFireBase = axios.create({
  baseURL: FAVORIS_API_URL,
});
// eslint-disable-next-line 
export default {
  fetchFavoris: () =>
    apiFireBase
      .get("favoris.json")
      .then((response) => (response.data ? response.data : [])),
      saveFavoris: favoris=> apiFireBase.put('favoris.json', favoris)
};
