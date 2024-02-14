import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import NotFound from './NotFound/NotFound';
import css from './App.module.css';
import MoviesDetail from './MoviesDetail/Moviesdetail';

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/Movies" className={css.navLink}>
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies?query=:movies" element={<Movies />}></Route>
        <Route path="/movies/:moviesId" element={<MoviesDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
