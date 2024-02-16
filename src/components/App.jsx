import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import NotFound from './NotFound/NotFound';
import css from './App.module.css';
import MoviesDetail from './MoviesDetail/Moviesdetail';
import Reviews from './Reviews/Reviews';

const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/goit-react-hw-05-movies" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/Movies" className={css.navLink}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading please wait...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies?query=:movies" element={<Movies />}></Route>
          <Route path="/movies/:moviesId" element={<MoviesDetail />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
