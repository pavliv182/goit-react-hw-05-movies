// import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

// const Header = lazy(() => import('components/Header'));
// const Cast = lazy(() => import('components/Cast'));
// const Reviews = lazy(() => import('components/Reviews'));

// const HomePage = lazy(() => import('pages/HomePage'));
// const SearchPage = lazy(() => import('pages/SearchPage'));
// const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

// // const Header = () => lazy(() => import('components/Header'));
// // const Cast = () => lazy(() => import('components/Cast'));
// // const Reviews = () => lazy(() => import('components/Reviews'));

// // const HomePage = () => lazy(() => import('pages/HomePage'));
// // const SearchPage = () => lazy(() => import('pages/SearchPage'));
// // const MovieDetailsPage = () => lazy(() => import('pages/MovieDetailsPage'));
// // const NotFoundPage = () => lazy(() => import('pages/NotFoundPage'));

// export const App = () => {
//   return (
//     <>
//       <Header />
//       <Suspense fallback={<p>...Loading</p>}>
//         <Routes>
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/movies" element={<SearchPage />} />
//           <Route path="/movies/:id" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

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
      <Header path="/index" />
      {/* <Suspense fallback={<p>...Loading</p>}> */}
      <Routes>
        <Route path="/index" element={<HomePage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
};
