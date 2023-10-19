// apiEndpoint.tsx

import axios from "axios";

const apiUrl = "https://backend.taiga-auto.com/api_taiga/users";

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

export const registerWithGoogle = (googleIdToken) => {
  return axios.post(`${apiUrl}/registerSocial`, {
    googleAccessToken: googleIdToken,
  });
};
