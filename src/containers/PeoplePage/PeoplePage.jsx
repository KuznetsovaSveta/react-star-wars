// библиотеки
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// HOC
import { withErrorApi } from '@hoc-helpers/withErrorApi.jsx';
// компоненты
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList.jsx';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation/PeopleNavigation.jsx';
// утилиты
import { getApiResource, changeHTTP } from '@utils/network.js'
// сервисы/функции
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData.js'
// импортируем константы
import { API_PEOPLE } from '@constants/api.js'
import { useQueryParams } from '@hooks/useQueryParams.js';
// импортируем стили
import styles from './PeoplePage.module.css';




const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setcounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');
    // console.log(prevPage, nextPage);
    
    // это перенсли в hoc
    // const [errorApi, setErrorApi] = useState(false);

    // вызываем хук useEffect внутри компонента
    // аналог componentDidMount в классовом компоненте
    // useEffect принимает коллбэк функцию и массив зависимостей
    const getResource = async(url) => {
        const res = await getApiResource(url);
        // console.log(res.previous);
        

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
            // когда добавляем данные по людям, также добавляем данные предыдущей и следующей страниц
            setPrevPage(changeHTTP(res.previous));
            // console.log(res.previous);
            setNextPage(changeHTTP(res.next));
            setcounterPage(getPeoplePageId(url))
            setErrorApi(false);
        } else{
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);

  return(
    // по правилам return должен возвращать один элемент
    // фрагмент создает невидимую обертку, которая не будет рендериться в html
    // для написания js кода внутри return используются фигурные скобки
    <>
    {/* передаем пропсы в  PeopleNavigation*/}
        <PeopleNavigation getResource={getResource} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage}/>
        { people && <PeopleList people={people}/> }
    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);