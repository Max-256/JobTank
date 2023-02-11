
import http from './httpService';
import config from '../config.json';
const apiEndPoint = config.apiUrl + "/recruiters";

export function register(recruiter) {
    return http.post(apiEndPoint, {
        username: recruiter.username,
        email: recruiter.email,
        password: recruiter.password
    });
}

