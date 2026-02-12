import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
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
import burger from "./img/burger.svg";
import close from "./img/close.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [logo, setLogo] = useState(logoLightsaber);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isTheme = useTheme();
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/people/?page=1", label: "People" },
    { to: "/search", label: "Search" },
    { to: "/not-found", label: "Not Found" },
    { to: "/fail", label: "Fail" },
  ];

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

  const handleBurgerClick = () => {
    setIsMenuActive(true);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuActive(false);
    }, 300)
  };

  return (
    <div className={styles.header}>
      <img src={logo} alt="" className={styles.header__logo} />
      <div
        className={cn(
          styles.header__listWrapper,
          isMenuActive ? styles.active : "",
        )}
      >
        <div className={styles.header__close} onClick={closeMenu}>
          <img src={close} alt="" />
        </div>
        <ul className={styles.header__list}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={styles.header__link}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.burger} onClick={handleBurgerClick}>
        <img src={burger} alt="" />
      </div>
      <Favorite />
    </div>
  );
};

export default Header;
