import axios from "axios";

const apiUrl = "http://localhost:8080/api_taiga/users";

export const registerWithEmail = (userData) => {
  return axios.post(`${apiUrl}/registerEmail`, userData);
};

export const registerInfo = (infoData) => {
  return axios.post(`${apiUrl}/registerInfo`, infoData);
};

export const registerWithFacebook = (accessToken) => {
  return axios.post(`${apiUrl}/registerSocial`, {
    facebookAccessToken: accessToken,
  });
};

export const registerWithGoogle = (email, name, headers) => {
  return axios.post(`${apiUrl}/registerSocial`, { email, name }, { headers });
};
