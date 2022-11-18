import axios from "axios";
export const baseUrl = "https://cantirondas.herokuapp.com";

export const getInfoHome = async () => {
  const url = `${baseUrl}/home/`;
  return await axios.get(url);
};

export const getSongs = async () => {
  const url = `${baseUrl}/canciones/`;
  return await axios.get(url);
};

export const pageSongs = async () => {
  const url = `${baseUrl}/pagina-canciones/`;
  return await axios.get(url);
};

export const downloads = async () => {
  const url = `${baseUrl}/descargables/`;
  return await axios.get(url);
};

export const pageDownloads = async () => {
  const url = `${baseUrl}/pagina-descargables/`;
  return await axios.get(url);
};
