import { NavLink } from 'react-router-dom';
import css from './header.module.css';

const getActiveLink = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : `${css.link}`;
};

function Header() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navlist}>
          <li>
            <NavLink className={getActiveLink} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveLink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
