import { instance } from './setting';

const getMoviesTrending = async () => {
  try {
    const response = await instance.get('trending/movie/day?language=en-US');
    console.log('c1', response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch movies');
  }
};

export { getMoviesTrending };
