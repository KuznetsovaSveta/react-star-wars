import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

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
    <div className="navigation">
      {/* TODO: здесь невалидный код получается, кнопка внутри ссылки */}
      <NavLink
        to={`/people/?page=${counterPage - 1}`}
        className={styles.navigation__link}
      >
        <button
          onClick={handleChangePrev}
          // если prevPage нет, кнопка будет неактивна
          disabled={!prevPage}
          className={styles.navigation__button}
        >
          Previous
        </button>
      </NavLink>
      <NavLink
        to={`/people/?page=${counterPage + 1}`}
        className={styles.navigation__link}
      >
        <button
          onClick={handleChangeNext}
          className={styles.navigation__button}
          disabled={!nextPage}
        >
          Next
        </button>
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
