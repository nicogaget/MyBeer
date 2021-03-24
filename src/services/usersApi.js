import axios from 'axios';
import {USERS_API} from './config'

function register(user){
  return axios.post(USERS_API,
  user)
}
// eslint-disable-next-line
export default {
  register
}