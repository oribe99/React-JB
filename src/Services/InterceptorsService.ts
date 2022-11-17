import axios from "axios";
import {authStore} from "../Redux/AuthState";
import authService from "./AuthService";

class InterceptorsService {

    public createInterceptors(): void {
        axios.interceptors.request.use(request => {
            if (authService.isLoggedIn) {
                request.headers.Authorization = "Bearer " + authStore.getState().token;
            }
            return request;
        })
    }
}

const interceptorService = new InterceptorsService();
export default interceptorService;
