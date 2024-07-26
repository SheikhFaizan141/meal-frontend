import axios from "axios";

const authFetch = axios.create({
    baseURL: __API_URL__,
    headers: {
        "Accept": "application/json",
        "Referer": 'http://localhost:5173'
    }

})

authFetch.defaults.withCredentials = true;
authFetch.defaults.withXSRFToken = true;


export { authFetch }