import axios from "axios";

const apiUrl = "https://backend.taiga-auto.com/api_taiga";

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

export const getCarList = () => {
  return axios.get(`${apiUrl}/products/carList`);
};

export const verifyEmail = (verificationToken) => {
  return axios.get(`${apiUrl}/users/verifyEmail?token=${verificationToken}`);
};
