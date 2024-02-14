import css from './Movies.module.css';
import { getSearchMovie } from '../../services/getSearchMovie';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [word, setword] = useState('');
  const navigate = useNavigate();

  const fetchSearchMovie = async world => {
    try {
      const response = await getSearchMovie(world);
      setMovies(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    const searchButton = document.querySelector('input').value;
    setword(searchButton);
  };

  useEffect(() => {
    if (word) {
      navigate(`/movies?query=${word}`);
      fetchSearchMovie(word);
    }
  }, [word, navigate]);

  return (
    <div>
      <div className={css.searchContainer}>
        <input
          type="text"
          placeholder="search movie"
          className={css.searchBar}
        />
        <Link to={`/movies?query=` + word}>
          <button onClick={handleClick}>Search</button>
        </Link>
      </div>
      <div>
        <ul>
          {movies.map(element => (
            <li key={element.id}>
              <Link to={`/movies/` + element.id}>{element.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
