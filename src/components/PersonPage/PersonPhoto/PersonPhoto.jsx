import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import emptyIcon from "./img/favorite-empty.svg";
import fillIcon from "./img/favorite-fill.svg";

import {
  addPersonToFavoite,
  removePersonFromFavoite,
} from "@store/actions/index.js";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personId,
  personName,
  personPhoto,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();
  const add = () => {
    dispatch(
      addPersonToFavoite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      }),
    );
    setPersonFavorite(true);
  };
  const remove = () => {
    dispatch(removePersonFromFavoite(personId));
    setPersonFavorite(false);
  };

  // если персонаж в избранном, удаляем его оттуда, если нет - добавляем
  const dispatchFavoritePeople = () => {
    personFavorite ? remove() : add();
  };

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.person__photo}
          src={personPhoto}
          onError={(e) => {
            if (e.target.src.includes('default.jpg')) {
              return; // Уже пробовали заглушку - выходим
            }
            e.target.onerror = null;
            e.target.src = `/img/default.jpg`;
          }}
          alt={personName}
        />

        <img
          src={personFavorite ? fillIcon : emptyIcon}
          alt="Add to favorite"
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personName: PropTypes.string,
  personPhoto: PropTypes.string,
  id: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};
export default PersonPhoto;
