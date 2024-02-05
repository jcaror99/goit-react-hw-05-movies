import { instance } from './setting';

const getDetailMovies = async idMovie => {
  try {
    const response = await instance.get(`movie/${idMovie}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching detail movies:', error);
    throw new Error('Failed to fetch detail  movies');
  }
};

export { getDetailMovies };
