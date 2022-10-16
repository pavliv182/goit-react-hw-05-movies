import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import { fetchByQuery } from 'api';
import MovieListItems from 'components/MovieListItems';

function SearchPage() {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSubmit = q => {
    setSearchParams(q);
  };

  useEffect(() => {
    setState(prev => ({
      ...prev,
      loading: true,
    }));

    const fetchMovies = async () => {
      try {
        const data = await fetchByQuery(query);

        setState(prev => ({
          ...prev,
          loading: false,
          data: data.results,
        }));
      } catch (error) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };
    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <div>
      <SearchForm formSubmit={onSubmit} />
      <MovieListItems data={state.data} />
    </div>
  );
}

export default SearchPage;
