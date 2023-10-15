import axios from "axios";

const getListType = (type) => {
    return axios.get(`http://localhost:3000/api/getListByTypeList/${type}`);
  };

  const getListTypes = async (datas) => {
    let datos = {}
    try {

    const response = await axios
      .post("http://localhost:3000/api/getAllListByTypes", datas, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        datos =response.data
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    } catch (error) {
        console.error("Error loading list:", error);
        throw error;
    }
    return datos;
};

const getListPartner = (partner) => {
    return axios.get(`http://localhost:3000/api/getListByPartner/${partner}`);
  };
  
export { getListType,getListPartner,getListTypes };