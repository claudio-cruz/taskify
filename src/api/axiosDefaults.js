import axios from "axios";

// axios.defaults.baseURL = 'taskify-2023.herokuapp.com'
axios.defaults.baseURL = 'https://claudiocruz-apitaskify-j9oplq7i0aq.ws-eu88.gitpod.io'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true
