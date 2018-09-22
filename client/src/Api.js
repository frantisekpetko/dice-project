import axios from 'axios';

export default () => {
    return axios.create({
        baseURL:  process.env.NODE_ENV === 'production' ?
            'http://rpgapp.mygamesonline.org/api/' : 'http://localhost:1000/api/'
    })
}
