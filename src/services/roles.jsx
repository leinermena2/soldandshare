import axios from "axios";

const getRoles = () => {
  return axios.get(`http://localhost:3000/api/roles`);
};


export { getRoles };