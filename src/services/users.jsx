import axios from "axios";

const createUsers = async (datas) => {
  let datos = {}
  try {
    const response = await axios
      .post("http://localhost:3000/api/CreateUsers", datas, {
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
    console.error("Error creating users:", error);
    throw error;
  }

  return datos;
};

const loginUsers = async (datas) => {
  let datos = {}
  try {
    const response = await axios
      .post("http://localhost:3000/api/loginUser", datas, {
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
    console.error("Error creating users:", error);
    throw error;
  }

  return datos;
};

export { createUsers, loginUsers };
