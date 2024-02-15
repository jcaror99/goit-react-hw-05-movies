import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from './../../services/getCast';
import { getImages } from 'services/getImages';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [imageMovies, setImageMovies] = useState({});

  const fetchCast = async moviesId => {
    try {
      const response = await getCast(moviesId);
      console.log(response);
      setCast(response);
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw new Error('Failed to fetch movies');
    }
  };

  const fetchImages = async () => {
    try {
      const response = await getImages();
      console.log('images', response);
      setImageMovies(response);
    } catch (error) {
      console.error('Error fetching Images movies:', error);
      throw new Error('Failed to fetch Images movies');
    }
  };

  useEffect(() => {
    fetchCast(moviesId);
    fetchImages();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {cast
          .filter(
            (castMember, index, self) =>
              index === self.findIndex(c => c.id === castMember.id)
          )
          .map(castMember => (
            <div key={castMember.id}>
              <img
                src={
                  imageMovies.base_url &&
                  imageMovies.profile_sizes &&
                  castMember.profile_path
                    ? `${imageMovies.base_url}${imageMovies.profile_sizes[0]}${castMember.profile_path}`
                    : ''
                }
                alt={castMember.name}
              />
              <li>{castMember.name}</li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
