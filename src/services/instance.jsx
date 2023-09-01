import axios from "axios";
const isBrowser = typeof window !== "undefined";

axiosInstance.interceptors.request.use(
    (config) => {
      const currentUser = isBrowser
        ? localStorage.getItem("access_token_at") || ""
        : "";
      if (currentUser) {
        config.headers["Authorization"] = `Bearer ${currentUser}`;
      }
      config.headers["x-bodytech-organization"] = 1;
      config.headers["x-bodytech-company"] = 1;
      config.headers["x-bodytech-brand"] = 2;
      return config;
    },
    (error) => Promise.reject(error)
  );