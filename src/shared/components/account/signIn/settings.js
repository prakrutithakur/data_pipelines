import Sdk from 'casdoor-js-sdk';

export const ServerUrl = `${process.env.REACT_APP_CASDOOR_URL}`;

export const config = {
  serverUrl: `${process.env.REACT_APP_CASDOOR_URL}`,
  clientId: `${process.env.REACT_APP_CASDOOR_CLIENT_ID}`,
  organizationName: 'built-in',
  appName: 'data_pipelines',
  redirect_uri: `${process.env.REACT_APP_CASDOOR_REDIRECT_URI}`,
};

export const CasdoorSDK = new Sdk(config);

export const isLoggedIn = () => {
  const token = getToken();
  return token !== null && token.length > 0;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const goToLink = (link) => {
  window.location.href = link; // TODO: replace url later
};

export const getUserinfo = () => {
  return CasdoorSDK.getUserInfo(getToken());
};

export const goToProfilePage = () => {
  window.location.assign(CasdoorSDK.getMyProfileUrl());
};

export const logout = () => {
  // localStorage.removeItem('token');
  localStorage.clear();
};

export const showMessage = (message) => {
  alert(message);
};
