import PropTypes from "prop-types";
import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo.jsx";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto.jsx";
// import PersonFilms from "@components/PersonPage/PersonFilms/PersonFilms.jsx";
import GoBack from "@components/PersonPage/GoBack/GoBack.jsx";
import UiLoading from "@ui/UiLoading/UiLoading.jsx"

import { withErrorApi } from "@hoc-helpers/withErrorApi.jsx";
import { getApiResource } from "@utils/network.js";
import {getBaseUrl} from "@utils/baseUrl.js";
import { API_PERSON } from "@constants/api.js";
import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms.jsx'));

const PersonPage = ({ setErrorApi }) => {
  const id = useParams().id;
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    // getApiResource - асинхронная функция, поэтому для работы с ней ее нужно вызывать внутри асинхронной функции. Делаем самовызывающуюся функцию
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);
      setPersonId(id);
      setPersonPhoto(`${getBaseUrl()}/img/${id}.webp`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      
      // console.log(id, personId);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
    <GoBack />
      <div className={styles.person}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.person__container}>
          <PersonPhoto personId={personId} personName={personName} personPhoto={personPhoto} personFavorite={personFavorite}
setPersonFavorite={setPersonFavorite}/>
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme="white"/>}>
              <PersonFilms personFilms={personFilms}/>
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};
export default withErrorApi(PersonPage);
