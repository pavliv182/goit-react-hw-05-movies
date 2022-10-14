import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: 'b01160fe65872b7102c85dbc7141a795' },
});

export const fetchTrending = async () => {
  const { data } = await instance.get('trending/all/day', {
    params: { page: 1 },
  });
  return data;
};

export const fetchByQuery = async query => {
  const { data } = await instance.get('search/movie', {
    params: { query },
  });
  return data;
};

export const fetchGenres = async () => {
  const { data } = await instance.get('genre/movie/list');
  return data;
};