import axios from "axios"

const instence = axios.create({
    baseURL: "http://localhost:8080/api"
})

export default instence