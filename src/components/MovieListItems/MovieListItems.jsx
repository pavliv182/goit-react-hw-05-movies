import { Link } from 'react-router-dom';

function MovieListItems({ data }) {
  const elements = data.map(e => (
    <li key={e.id}>
      <Link to={`/movies/${e.id}`}>{e.title || e.name}</Link>
    </li>
  ));
  return <ul>{elements}</ul>;
}

export default MovieListItems;
