import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li>
          <NavLink to="/" className={styles.header__link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1" className={styles.header__link}>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" className={styles.header__link}>
            Not Found
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
