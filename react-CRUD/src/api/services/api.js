import {env} from '../../helpers/helperInterface';
import axiosInstance from '../config/axiosConfiguration';

const API = Object.create(null);

API.call = () => {

  const options = {
    method: 'GET',
    url: env.api.myService.endpoint,
  };

  return axiosInstance(options);
};

export default API;
