import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
