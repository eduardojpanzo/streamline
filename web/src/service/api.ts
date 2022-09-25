import { parseCookies} from "nookies";
import axios from "axios";

const {'SLine_token':token} = parseCookies();

export const api = axios.create({
    baseURL:`http://localhost:2447`,
    headers:{
        authorization:`Bearer ${token}`
    }
})
