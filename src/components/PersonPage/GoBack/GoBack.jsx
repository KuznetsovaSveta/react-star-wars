import { useNavigate } from 'react-router-dom'

import iconBack from './img/back.svg'
import styles from './GoBack.module.css';

const GoBack = () => {
    const navigate = useNavigate();

    const handleGoBack = event => {
        event.preventDefault();
        navigate(-1);
        // console.log('handleGoBack');
    }
  return(
    <>
    <a href="#" onClick={handleGoBack} className={styles.link}>
        <img src={iconBack} alt="Go back" className={styles.link__img}/>
        <span>Go Back</span></a></>
  )
}

export default GoBack;