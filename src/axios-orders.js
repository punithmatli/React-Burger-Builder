import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-my-app.firebaseio.com/'
})

export default instance;