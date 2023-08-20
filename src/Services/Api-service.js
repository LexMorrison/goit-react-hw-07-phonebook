import axios from 'axios';

export const instanceUrl = axios.create({
  baseURL: 'https://64e237e8ab0037358818d73c.mockapi.io',
});
