


import axios from 'axios';

const Labour_API_BASE_URL="http://localhost:8080/user/labour";

class LabourService{


 //3  
getLabour(){
    return axios.get(Labour_API_BASE_URL+'/details');
}


//1
createLabour(labour){
  return axios.post(Labour_API_BASE_URL+'/add',labour);
}


//7
getLabourAdharNo(aadharNo){
    return axios.get(Labour_API_BASE_URL +'/'+aadharNo);
}


//6
updateLabour(aadharNo,labour){
    return axios.put(Labour_API_BASE_URL +'/' +aadharNo,labour);
}

//5
deleteLabour(aadharNo){
    return axios.delete(Labour_API_BASE_URL + '/' + aadharNo);
}

//4
getLabourByAdharNoAndPassword(aadharNo,password){
    return axios.post(Labour_API_BASE_URL+'/'+aadharNo+'/'+password);
}
 
//2
createHistory(history){
    return axios.post(Labour_API_BASE_URL+'/add/history',history);
}


//8
getHistoryByAadharNo(aadharNo){
    return axios.get(Labour_API_BASE_URL +'/history/'+aadharNo);
}


}  
export default new LabourService();