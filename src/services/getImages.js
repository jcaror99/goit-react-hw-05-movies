import { instance } from './setting';

const getImages = async () => {
  try {
    const response = await instance.get('/configuration');
    return response.data.images;
  } catch (error) {
    console.error('Error fetching images movies:', error);
    throw new Error('Failed to fetch images movies');
  }
};

export { getImages };
