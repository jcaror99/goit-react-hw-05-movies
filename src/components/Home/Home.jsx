import { useEffect, useState } from 'react';
import { getMoviesTrending } from 'services/getMoviesTrending';
import { Link } from 'react-router-dom';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  const fetchMoviesTrending = async () => {
    try {
      const trendingMovies = await getMoviesTrending();
      console.log('c2', trendingMovies);
      setMoviesTrending(trendingMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoviesTrending();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {moviesTrending.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/` + movie.id}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
