import { instance } from './setting';

const getSearchMovie = async word => {
  try {
    const response = await instance.get(
      `search/movie?query=${word}&include_adult=false&language=en-US&page=1`
    );
    console.log('c1', response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies by word:', error);
    throw new Error('Failed to fetch movies by word');
  }
};

export { getSearchMovie };
