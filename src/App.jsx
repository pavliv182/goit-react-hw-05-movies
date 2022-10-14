import { Routes, Route } from 'react-router-dom';
import { fetchTrending, fetchByQuery } from 'shared/services/API';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import SearchPage from 'pages/SearchPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

export const App = () => {
  // fetchTrending().then(data => console.log(data));
  // fetchByQuery('cat').then(data => console.log(data));
  // fetchGenres().then(data => console.log(data));
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
};
