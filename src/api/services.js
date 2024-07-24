import axios from "axios";

const mealAxios = axios.create({
    baseURL: __API_URL__,
    headers: {
        "Accept": "application/json"
    }

})

mealAxios.defaults.defaults.withCredentials = true;
mealAxios.defaults.defaults.withXSRFToken = true;


export { mealAxios }