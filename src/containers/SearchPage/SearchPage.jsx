import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import UiInput from "@ui/UiInput/UiInput.jsx";

import { withErrorApi } from "@hoc-helpers/withErrorApi.jsx";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { getPeopleId } from "@services/getPeopleData.js";
import {getBaseUrl} from "@utils/baseUrl.js";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  // когда будем что-то изменять внутри handleInputChange, будем менять и inputSearchValue
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);
  //   при загрузке страницы отправляем запрос с пустым значением, чтобы вывелись все герои
  useEffect(() => {
    getResponse("");
  }, []);

  // debounce - чтобы добавить задержку после ввода пользователем данных
  // первый аргумент - функция, которая выполнится, второй - задержка
  // чтобы debounce отработал, нужно использовать его совместно с хуком useCallback
  // useCallback принимает два аргумента: коллбэк функцию, которую надо будет вызвать, и список зависимостей
  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    [],
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      // peopleList - массив, содержащий объекты. Один герой - один объект с id, name, img
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = `${getBaseUrl()}img/${id}.webp`;
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      {/* когда будем изменять данные в инпуте, будет меняться и состояние */}
      {/* это управляемый компонент, когда мы управляем инпутом */}
      <UiInput
        className=""
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.search__input}
      />

      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};
export default withErrorApi(SearchPage);
