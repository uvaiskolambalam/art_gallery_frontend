import axios from "axios";

const ServerUrl=axios.create({
    baseURL:"https://artgallery.buzz/"
})

export default ServerUrl