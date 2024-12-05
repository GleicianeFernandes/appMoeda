import axios from 'axios';

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/last/',
});
export const buscarCotacao = (moeda) => {
  return api.get(`${moeda}`);
};

export default api;
