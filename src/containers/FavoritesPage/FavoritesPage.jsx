import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx'

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const [people, setPeople] = useState([]);
  const storeData = useSelector((state) => state.favoriteReducer);

  
  

  // пишем аналог компонент дид маунт
  useEffect(() => {
    const arr = Object.entries(storeData);
    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          // name: item[0].name,
          // img: item[0].img,
          // вместо записи выше просто разворачиваем массив
          ...item[1],
        }
      })
    
      setPeople(res);
    }
    
  }, []); 

  return (
    <>
      <h1 className="header__text">FavoritePage</h1>
      {people.length ? <PeopleList people={people}/> : <h2 className={styles.comment}>No data</h2>}
    </>
  );
};

export default FavoritesPage;
