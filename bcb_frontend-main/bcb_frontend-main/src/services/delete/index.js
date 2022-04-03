import axios from 'axios';
import { baseUrl } from '../../util/baseUrl';

export const deleteUser = async(userId)=>{
    return await axios.delete(`${baseUrl}/delete/${userId}`);    
}