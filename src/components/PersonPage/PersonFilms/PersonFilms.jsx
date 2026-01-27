import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { makeConcurrentRequest, changeHTTP } from '@utils/network.js'

import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            // берем все урлы из массива и меняем http => https
            const filmsHTTPS = personFilms.map(url => changeHTTP(url));
            const response = await makeConcurrentRequest(filmsHTTPS);

            // console.log(response)

            setFilmsName(response);
        })();
    }, [])
  return(
    <>
    <div className={styles.films}>
        <ul className={styles.films__list}>
            {filmsName
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(({title, episode_id}) => 
                <li key={episode_id} className={styles.films__item}>
                    <span className={styles.films__episode}>Episode {episode_id}</span>
                    <span className={styles.films__separator}> : </span>
                    <span className={styles.films__name}>{title}</span>
                </li>
            )}
        </ul>
    </div>
    </>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
}
export default PersonFilms;