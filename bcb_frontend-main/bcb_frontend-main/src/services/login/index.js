import axios from 'axios';
import { baseUrl } from '../../util/baseUrl';

export const loginService = async (userLogin, setUser)=>{
    await axios.post(`${baseUrl}/login`, userLogin)
    .then(response => setUser(response.data));
}   