import axios from "axios"
const instance = axios.create({
    baseURL:'https://656499e2ceac41c0761e809d.mockapi.io/',
    timeout: 5000,
    headers:{
        'Content-Type': "application/json",
    }
})
export default instance