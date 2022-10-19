import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieList({ data }) {
  const elements = data.map(e => (
    <li key={e.id}>
      <Link to={`/movies/${e.id}`}>{e.title || e.name}</Link>
    </li>
  ));
  return <ul>{elements}</ul>;
}

export default MovieList;

MovieList.dafaultProps = {
  data: [],
};

MovieList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
