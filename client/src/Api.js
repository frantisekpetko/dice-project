import axios from 'axios';

export default () => {
    return axios.create({
        baseURL:  'http://localhost:80/api/'
    })
}
