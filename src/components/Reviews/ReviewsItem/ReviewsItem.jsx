import css from './reviewsItem.module.css';

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
