import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetailsById } from 'shared/services/API';
import css from './movieDetailsPage.module.css';

function MovieDetailsPage() {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  const imgURL = 'https://image.tmdb.org/t/p/w500';

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from || '/home';
  const goBack = () => navigate(from);

  useEffect(() => {
    setData(prev => ({
      ...prev,
      loading: true,
    }));

    const fetchOneMovieDetails = async () => {
      try {
        const data = await fetchMovieDetailsById(id);
        console.log(data);
        setData(prev => ({
          ...prev,
          loading: false,
          movies: data,
        }));
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchOneMovieDetails();
  }, [id]);

  // fetchMovieDetailsById('94997').then(a => console.log(a));
  //   console.log(id);

  const { loading, error, movies } = data;
  const {
    poster_path,
    backdrop_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movies;
  return (
    <>
      {loading && <p>...Loading</p>}
      <button onClick={goBack} className={css.goBack} type="button">
        Go back
      </button>
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={imgURL + poster_path || backdrop_path}
          alt={title || name}
        />
        <div className={css.about}>
          <h2>{title || name}</h2>
          <span>{release_date}</span>
          <p className={css.score}>{vote_average}</p>
          <h3>Overview</h3>
          <p className={css.overview}>{overview}</p>
          <h3 className={css.genresTitle}>Genres</h3>
          <p>
            {genres &&
              genres.map(e => (
                <span className={css.genresItem} key={e.id}>
                  {e.name}
                </span>
              ))}
          </p>
        </div>
      </div>
      <div className={css.links}>
        <h3 className={css.info}>Aditional information</h3>
        <Link state={{ from }} className={css.link} to={`/movies/${id}/cast`}>
          Cast
        </Link>
        <Link
          state={{ from }}
          className={css.link}
          to={`/movies/${id}/reviews`}
        >
          Reviews
        </Link>
      </div>
      <div className="">
        <Outlet />
      </div>
      {error && <p>{error}</p>}
    </>
  );
}

export default MovieDetailsPage;
