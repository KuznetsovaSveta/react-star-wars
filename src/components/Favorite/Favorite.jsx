import { Link } from "react-router";
import {useSelector} from 'react-redux'
import favoriteIcon from "./img/bookmark.svg";
import styles from "./Favorite.module.css";
import { useEffect, useState } from "react";

const Favorite = () => {
    const[count, setCount] = useState(null);
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        // если число трехзначное и больше, будет показываться ...
        length.toString().length > 2 ? setCount('...') : setCount(length);
    })

  return (
    <>
      <Link to="/favorites" className={styles.container}>
      <span className={styles.counter}>{count}</span>
        <img src={favoriteIcon} alt="Favorites" className={styles.icon} />
      </Link>
    </>
  );
};

export default Favorite;
