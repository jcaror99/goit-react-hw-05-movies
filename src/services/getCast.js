import { instance } from './setting';

const getCast = async idMovie => {
  try {
    const response = await instance.get(
      `movie/${idMovie}/credits?language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw new Error('Failed to fetch cast');
  }
};

export { getCast };
