import PropTypes from "prop-types";
import { NavLink } from "react-router";
import { getBaseUrl } from "@utils/baseUrl";

import styles from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  const baseUrl = getBaseUrl();

  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, img }) => (
        <li key={name} className={styles.list__item}>
          <NavLink to={`/people/${id}`} className={styles.person__link}>
            <img
              src={`${baseUrl}/img/${id}.webp`}
              alt={name}
              className={styles.person__photo}
              onError={(e) => {
                if (e.target.src.includes("default.jpg")) {
                  return; // Уже пробовали заглушку - выходим
                }
                e.target.onerror = null;
                e.target.src = `${baseUrl}/img/default.jpg`;
              }}
            />
            <p className={styles.person__name}>{name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
