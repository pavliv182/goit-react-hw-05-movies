import PropTypes from 'prop-types';

function CastItem({ data }) {
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  const elements = data.map(e => (
    <li key={e.id}>
      <img src={imgURL + e.profile_path} alt={e.original_name} />
      <h3>{e.name}</h3>
      <p>{e.character}</p>
    </li>
  ));
  return <ul>{elements}</ul>;
}

export default CastItem;

CastItem.dafaultProps = {
  data: [],
};

CastItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
