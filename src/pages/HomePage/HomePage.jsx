import { useState, useEffect } from 'react';
import { fetchTrending } from 'api';
import MovieList from 'components/MovieList';

function HomePage() {
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
    <div>
      <h1>Tranding Today</h1>
      {loading && <p>...Loading</p>}
      <MovieList data={movies} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default HomePage;
