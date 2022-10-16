import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
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

  const imgURL = 'https://image.tmdb.org/t/p/w500/';

  const navigate = useNavigate();
  // const location = useLocation();

  const goBack = () => navigate('/movies');
  // console.log(from);

  useEffect(() => {
    setData(prev => ({
      ...prev,
      loading: true,
    }));

    const fetchOneMovieDetails = async () => {
      try {
        const data = await fetchMovieDetailsById(id);
        // console.log(data);
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

  const normalizedDate = release_date?.slice(0, 4) || null;
  const normalizedVoteAverage = (vote_average * 10).toFixed();

  return (
    <>
      {loading && <p>...Loading</p>}
      <button onClick={goBack} className={css.goBack} type="button">
        Go back
      </button>
      {!error && (
        <>
          <div className={css.wrapper}>
            {poster_path ? (
              <img
                className={css.img}
                src={imgURL + poster_path}
                alt={title || name}
              />
            ) : (
              <img
                className={css.img}
                src={imgURL + backdrop_path}
                alt={title || name}
              />
            )}

            <div className={css.about}>
              <h2>
                {title || name}({normalizedDate})
              </h2>

              <p className={css.score}>User score: {normalizedVoteAverage}%</p>
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
            <Link className={css.link} to={`/movies/${id}/cast`}>
              Cast
            </Link>
            <Link className={css.link} to={`/movies/${id}/reviews`}>
              Reviews
            </Link>
          </div>
          <div>
            <Outlet />
          </div>
        </>
      )}
      {error && <h1>No movie information</h1>}
    </>
  );
}

export default MovieDetailsPage;
