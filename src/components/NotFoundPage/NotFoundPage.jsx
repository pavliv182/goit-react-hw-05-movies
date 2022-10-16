import { useNavigate } from 'react-router-dom';
import css from './notFoundPage.module.css';

function NotFoundPage() {
  const navigate = useNavigate();
  const goBack = () => navigate('/home');

  return (
    <>
      <button onClick={goBack} className={css.goBack} type="button">
        Go back
      </button>
      <h1>Зачем ты это делаешь? </h1>;
    </>
  );
}

export default NotFoundPage;
