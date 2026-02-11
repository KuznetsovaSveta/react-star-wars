import PropTypes from "prop-types";
import { Link } from "react-router";
import { getBaseUrl } from "@utils/baseUrl.js";
import styles from "./SearchPageInfo.module.css";

const SearchPageInfo = ({ people }) => (
  <>
    {people.length ? (
      <ul className={styles.list}>
        {people.map(({ id, name, img }) => (
          <li key={id} className={styles.person__item}>
            <Link to={`/people/${id}`} className={styles.person__link}>
              <img
                src={img}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${getBaseUrl()}img/default.jpg`;
                }}
                alt={name}
                className={styles.person__photo}
              />
              <p className={styles.person__name}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2 className={styles.comment}>No results</h2>
    )}
  </>
);

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};
export default SearchPageInfo;
