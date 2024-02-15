import { instance } from './setting';

const getReviews = async idMovie => {
  try {
    const response = await instance.get(
      `movie/${idMovie}/reviews?language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching review:', error);
    throw new Error('Failed to fetch review');
  }
};

export { getReviews };
