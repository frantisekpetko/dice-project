import axios from 'axios';

const baseUrl = window.location.hostname === 'localhost' 
    ?`http://localhost:8000/api`
    :`https://${window.location.hostname}:8000/api`;

export default () => {
    return axios.create({
        baseURL:  baseUrl
    })
}
