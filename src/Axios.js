import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:5001/challenge-21021/us-central1/api"  //API (CLOUD FUNCTION URL)
});

export default instance;