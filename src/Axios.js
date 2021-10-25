import axios from "axios";

const instance = axios.create({
    baseURL:"..."  //API (CLOUD FUNCTION URL)
});

export default instance;