import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 20000,
});

const request = {
  get: (url, settings) => {
    return api.get(url, settings);
  },
  post: (url, data) => {
    return api.post(url, data);
  },
  delete: (url) => {
    return api.delete(url);
  },
};

export default request;
