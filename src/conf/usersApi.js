import axios from 'axios';

function register(user){
  return axios.post("http://localhost:8000/api/users",
  user)
}
// eslint-disable-next-line
export default {
  register
}