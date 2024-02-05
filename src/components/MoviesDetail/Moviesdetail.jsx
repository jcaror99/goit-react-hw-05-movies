import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovies } from 'services/getDetailMovies';
import { getImages } from 'services/getImages';
import css from './MoviesDetail.module.css';

const MoviesDetail = () => {
  const { moviesId } = useParams();
  const [detailMovies, setDetailMovies] = useState({});
  const [imageMovies, setImageMovies] = useState({});

  const fetchDetailMovies = async moviesId => {
    try {
      const response = await getDetailMovies(moviesId);
      console.log(response);
      setDetailMovies(response);
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
    fetchDetailMovies(moviesId);
    fetchImages();
  }, [moviesId]);

  return (
    <div className={css.container}>
      <div>
        <img
          src={
            imageMovies.base_url &&
            imageMovies.poster_sizes &&
            detailMovies.poster_path
              ? `${imageMovies.base_url}${imageMovies.poster_sizes[3]}${detailMovies.poster_path}`
              : ''
          }
          alt={detailMovies.title}
        />
      </div>
      <div>
        <ul>
          <li>
            <h1>{detailMovies.title}</h1>
          </li>
          <li>User Score: {detailMovies.vote_average}%</li>
          <li>
            <h3>Overview</h3>
          </li>
          <li>{detailMovies.overview}</li>
          <li>
            <h3>Genres</h3>
          </li>
          <li>
            {detailMovies.genres
              ? detailMovies.genres.map(element => element.name + ' ')
              : ''}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoviesDetail;
