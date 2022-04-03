import axios from 'axios';
import { baseUrl } from '../../util/baseUrl';

export const registerService = (userRegister)=>{
    axios.post(`${baseUrl}/register`, userRegister)
    .then(response => console.log(response.status));
}