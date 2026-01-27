import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo.jsx";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto.jsx";
import { withErrorApi } from "@hoc-helpers/withErrorApi.jsx";
import { getApiResource } from "@utils/network.js";
import { API_PERSON } from "@constants/api.js";
import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }) => {
  const id = useParams().id;
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  useEffect(() => {
    // getApiResource - асинхронная функция, поэтому для работы с ней ее нужно вызывать внутри асинхронной функции. Делаем самовызывающуюся функцию
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);
      console.log(res);
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

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <div className="person">
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.person__container}>
          <PersonPhoto id={id} personName={personName} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};
export default withErrorApi(PersonPage);
