import * as axios from "axios";

const apiFireBase = axios.create({
  baseURL: "https://mybeerfavoris-default-rtdb.firebaseio.com/",
});
export default apiFireBase;
