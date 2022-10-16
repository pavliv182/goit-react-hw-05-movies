import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'shared/services/api';
// import instance from 'shared/services/api';

import CastItem from './CastItem';

// export const fetchMovieCast = async id => {
//   const { data } = await instance.get(`movie/${id}/credits`);
//   return data;
// };

function Cast() {
  const [data, setData] = useState({
    cast: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    setData(prev => ({
      ...prev,
      loading: true,
    }));

    const fetchCast = async () => {
      try {
        const data = await API.fetchMovieCast(id);
        // console.log(data);
        setData(prev => ({
          ...prev,
          loading: false,
          cast: data.cast,
        }));
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchCast();
  }, [id]);

  const { loading, error, cast } = data;
  // const { poster_path } = movies;

  return (
    <>
      {loading && <p>...Loading</p>}
      <CastItem data={cast} />
      {error && <p>{error}</p>}
    </>
  );
}

export default Cast;
