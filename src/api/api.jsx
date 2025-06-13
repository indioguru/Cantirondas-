import axios from "axios";

export const baseUrl = "https://cantirondas.herokuapp.com";

const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export const getInfoHome = async () => {
  try {
    return await api.get("/home/");
  } catch (error) {
    throw new Error("Error fetching home data");
  }
};

export const getSongs = async () => {
  try {
    return await api.get("/canciones/");
  } catch (error) {
    throw new Error("Error fetching songs");
  }
};

export const pageSongs = async () => {
  try {
    return await api.get("/pagina-canciones/");
  } catch (error) {
    throw new Error("Error fetching songs page");
  }
};

export const downloads = async () => {
  try {
    return await api.get("/descargables/");
  } catch (error) {
    throw new Error("Error fetching downloads");
  }
};

export const pageDownloads = async () => {
  try {
    return await api.get("/pagina-descargables/");
  } catch (error) {
    throw new Error("Error fetching downloads page");
  }
};
