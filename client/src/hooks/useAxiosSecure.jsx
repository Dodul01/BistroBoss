import axios from 'axios';

// axios instence
const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/'
})

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');

    config.headers.authorization = `Bearer ${token}`;

    return config;
  }, function (err) {

    return Promise.reject(err);

  })

  // Intercepts 401 and 403
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, (err) => {
    const status = err.response.status;
    return Promise.reject(err);
  })

  return axiosSecure;
}

export default useAxiosSecure