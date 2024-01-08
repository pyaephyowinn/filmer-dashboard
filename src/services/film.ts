import axios from 'axios';

export const createFilm = async (data: any) => {
  return axios.post('/films', data);
};

export const getFilms = async () => {
  return axios.get('/films');
};

export const deleteFilm = async (id: string) => {
  return axios.delete(`/films/${id}`);
};
