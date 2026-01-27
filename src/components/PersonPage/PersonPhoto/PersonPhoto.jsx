import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({id, personName}) => {
  return <div className={styles.container}><img className={styles.person__photo} src={`/img/${id}.webp`} alt={personName}/></div>
}

PersonPhoto.propTypes = {
  personName: PropTypes.string,
  id: PropTypes.number,
}
export default PersonPhoto;