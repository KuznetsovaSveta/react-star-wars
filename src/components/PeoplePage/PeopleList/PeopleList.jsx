import PropTypes from 'prop-types';
import { NavLink } from 'react-router';

import styles from './PeopleList.module.css';
import { getBaseUrl } from "@utils/baseUrl.js";

const PeopleList = ({people}) => {
  return(
    <ul className={styles.list__container}>
        {people.map(({id, name, img}) => 
        <li key={name} className={styles.list__item}>
            <NavLink to={`/people/${id}`} className={styles.person__link}><img src={`${getBaseUrl()}img/${id}.webp`} alt={name} className={styles.person__phono}/>
            <p className={styles.person__name}>{name}</p></NavLink>
        </li>)}
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array,
}

export default PeopleList;