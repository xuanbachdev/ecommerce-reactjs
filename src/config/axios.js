import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default axios