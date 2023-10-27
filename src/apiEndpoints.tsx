import axios from "axios";

const apiUrl = "http://localhost:8080/api_taiga";

export const loginWithEmail = (userData) => {
  return axios.post(`${apiUrl}/users/login`, userData);
};

export const registerWithEmail = (userData) => {
  return axios.post(`${apiUrl}/users/registerEmail`, userData);
};

export const registerInfo = (infoData) => {
  return axios.post(`${apiUrl}/users/registerInfo`, infoData);
};

export const registerWithFacebook = (accessToken) => {
  return axios.post(`${apiUrl}/users/registerSocial`, {
    facebookAccessToken: accessToken,
  });
};

export const registerWithGoogle = (email, name, headers) => {
  return axios.post(
    `${apiUrl}/users/registerSocial`,
    { email, name },
    { headers }
  );
};

export const getProductList = () => {
  return axios.get(`${apiUrl}/products/list`);
};
