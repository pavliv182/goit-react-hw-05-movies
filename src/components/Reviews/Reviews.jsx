import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'shared/services/API';

import ReviewsItem from './ReviewsItem';

function Reviews() {
  const [data, setData] = useState({
    reviews: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    setData(prev => ({
      ...prev,
      loading: true,
    }));

    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(id);
        // console.log(data);

        setData(prev => ({
          ...prev,
          loading: false,
          reviews: data.results,
        }));
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchReviews();
  }, [id]);

  const { loading, error, reviews } = data;
  // const { poster_path } = movies;

  return (
    <>
      {loading && <p>...Loading</p>}
      {reviews.length ? (
        <ReviewsItem data={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      {error && <p>{error}</p>}
    </>
  );
}

export default Reviews;
