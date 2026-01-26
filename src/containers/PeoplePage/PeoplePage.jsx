// библиотеки
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// HOC
import { withErrorApi } from '@hoc-helpers/withErrorApi.jsx';
// компоненты
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx';
// утилиты
import { getApiResource } from '@utils/network.js'
// сервисы/функции
import { getPeopleId, getPeopleImage } from '@services/getPeopleData.js'
// импортируем константы
import { API_PEOPLE } from '../../constants/api.js'
// импортируем стили
import styles from './PeoplePage.module.css';




const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    // это перенсли в hoc
    // const [errorApi, setErrorApi] = useState(false);

    // вызываем хук useEffect внутри компонента
    // аналог componentDidMount в классовом компоненте
    // useEffect принимает коллбэк функцию и массив зависимостей
    const gerResource = async(url) => {
        const res = await getApiResource(url)

        // проверяем, не было ли ошибок в получении данных с сервера
        if (res) {
            // перебираем через map
            // // map возвращает новый массив
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return { id, name, img }
            });

            setPeople(peopleList);
            setErrorApi(false);
        } else{
            setErrorApi(true);
        }
    }

    useEffect(() => {
        gerResource(API_PEOPLE);
    }, []);

  return(
    // по правилам return должен возвращать один элемент
    // фрагмент создает невидимую обертку, которая не будет рендериться в html
    // для написания js кода внутри return используются фигурные скобки
    <>
        <h1 className='header__text'>Navigation</h1>
        { people && <PeopleList people={people}/> }
    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);