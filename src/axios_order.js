import Axios from "axios";

const instance = Axios.create({
    baseURL:'https://react-my-burger-builder-f127c.firebaseio.com/'
})

export default instance;