import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import UiButton from '@ui/UiButton/UiButton.jsx'

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({
  // принимаем пропсы из PeoplePage.jsx
  getResource,
  prevPage,
  nextPage,
  counterPage,
}) => {
  const handleChangePrev = () => getResource(prevPage);
  const handleChangeNext = () => getResource(nextPage);
  console.log(counterPage);

  return (
    <div className={styles.navigation}>
      {/* TODO: здесь невалидный код получается, кнопка внутри ссылки */}
      <NavLink
        to={`/people/?page=${counterPage - 1}`}
        className={styles.navigation__link}
      >
        <UiButton text="Previous" onClick={handleChangePrev} disabled={!prevPage}/>
      </NavLink>
      <NavLink
        to={`/people/?page=${counterPage + 1}`}
        className={styles.navigation__link}
      >
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage}/>
      </NavLink>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};
export default PeopleNavigation;
