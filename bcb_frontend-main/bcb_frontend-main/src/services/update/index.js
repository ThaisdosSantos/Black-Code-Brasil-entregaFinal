import axios from 'axios';
import { baseUrl } from '../../util/baseUrl';

export const updateUser = async(user, setUser, userId)=>{
    return await axios.put(`${baseUrl}/update/${userId}`, user)
    .then(response => setUser(response.data));
}