import instance from './setting';

const getMovies = async () => {
  try {
    const response = await instance.get('trending/movie/day?language=en-US');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch movies');
  }
};
export default getMovies;
