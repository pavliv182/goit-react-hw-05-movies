import { fetchTrending, fetchByQuery, fetchGenres } from 'shared/services/API';
import Header from 'components/Header';

// import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  // fetchTrending().then(data => console.log(data));
  // fetchByQuery('cat').then(data => console.log(data));
  fetchGenres().then(data => console.log(data));
  return (
    <>
      <Header />
    </>
  );
};
