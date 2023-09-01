import axios from "axios";

const getListType = (type) => {
    return axios.get(`http://localhost:3000/api/getListByTypeList/${type}`);
  };

const getListPartner = (partner) => {
    return axios.get(`http://localhost:3000/api/getListByPartner/${partner}`);
  };
  
export { getListType,getListPartner };