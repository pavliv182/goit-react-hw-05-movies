import css from './reviewsItem.module.css';
import PropTypes from 'prop-types';

function ReviewsItem({ data }) {
  const elements = data.map(e => (
    <li className={css.item} key={e.id}>
      <h3 className={css.author}>Author: {e.author}</h3>
      <p>{e.content}</p>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
}

export default ReviewsItem;

ReviewsItem.dafaultProps = {
  data: [],
};

ReviewsItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
