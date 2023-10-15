import axios from "axios"


const requestCodeOTP = async (datas) => {
    let datos = {}
    try {

    const response = await axios
      .post("http://localhost:3000/api/sendRequestCode", datas, {
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
        console.error("Error creating clients:", error);
        throw error;
    }
    return datos;
}




export { requestCodeOTP };