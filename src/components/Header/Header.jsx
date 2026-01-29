import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite/Favorite.jsx";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider.jsx";

import logoDroid from "./img/droid.svg";
import logoLightsaber from "./img/lightsaber.svg";
import logoSpaceStation from "./img/space-station.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [logo, setLogo] = useState(logoLightsaber);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setLogo(logoLightsaber);
        break;
      case THEME_DARK:
        setLogo(logoSpaceStation);
        break;
      case THEME_NEITRAL:
        setLogo(logoDroid);
        break;
      default:
        setLogo(logoDroid);
    }
  }, [isTheme]);

  return (
    <div className={styles.header}>
      <img src={logo} alt="" className={styles.header__logo}/>
      <ul className={styles.header__list}>
        <li>
          <NavLink to="/" className={styles.header__link}>
            Home
          </NavLink>
        </li>
        <li>
          {/* указываем exact="false", потому что нам нужно, чтобы ссылка была активной когда открыта страница page и когда открыта страница героя(people/id) */}
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
      <Favorite />
    </div>
  );
};

export default Header;
