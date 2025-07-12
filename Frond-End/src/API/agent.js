import axios from "axios";

axios.defaults.baseURL = "https://daweney.onrender.com/";

const responseBody = (response) => response.data;

const requests = {
  get: (url, params) => axios.get(url, { params }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Account = {
  registerDoctor: (values) => requests.post("providers/signup", values),
  loginDoctor: (values) => requests.post("", values),
};

const agent = {
  Account,
};

export default agent;