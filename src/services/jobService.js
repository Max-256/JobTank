
import http from './httpService';
import config from '../config.json';
const apiEndPoint  = config.apiUrl + "/jobs";

export function getJobs(){
    return http.get(apiEndPoint);
}

export function getJob(id){
    return http.get(apiEndPoint + "/" + id);
}

export function postJob(job){
    return http.post(apiEndPoint, job);
}

export function putJob(job){
    return http.put(apiEndPoint + "/" + job._id, job);
}

export function deleteJob(id){
    return http.delete(apiEndPoint + "/" + id);
}
