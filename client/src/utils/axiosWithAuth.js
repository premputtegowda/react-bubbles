import axios from 'axios';


export function axiosWithAuth() {
    return axios.create({
        baseURL:'http://localhost:5000/',
        headers: {
            Authorization: localStorage.getItem('token')
        }

    })
}