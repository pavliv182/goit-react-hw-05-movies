import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import SearchPage from 'pages/SearchPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import NotFoundPage from 'components/NotFoundPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
