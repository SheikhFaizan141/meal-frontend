import axios from "axios";

const authRequest = axios.create({
    baseURL: __API_URL__,
    headers: {
        "Accept": "application/json"
    }

})

instance.defaults.withCredentials = true;
instance.defaults.withXSRFToken = true;


export { authRequest }