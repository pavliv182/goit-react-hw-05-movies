import { useState, useEffect } from 'react';
import { fetchTrending } from 'api';
import MovieListItems from '../MovieListItems';

function MovieList() {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    setData(prev => ({
      ...prev,
      loading: true,
    }));

    const onFirstLoad = async () => {
      try {
        const data = await fetchTrending();
        setData(prev => ({
          ...prev,
          loading: false,
          movies: data.results,
        }));
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };
    onFirstLoad();
  }, []);

  const { loading, error, movies } = data;

  return (
    <>
      {loading && <p>...Loading</p>}
      <MovieListItems data={movies} />
      {error && <p>{error}</p>}
    </>
  );
}

export default MovieList;
