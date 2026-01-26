import { useLocation, BrowserRouter } from 'react-router-dom'

import styles from './NotFoundPage.module.css';
import img from './img/404.png';

const NotFoundPage = () => {
    let currentUrl = useLocation();


  return(
    <>
    <div className={styles.error}>
        <img src={img} alt="Not Found" className={styles.error__img}/>
        <p className={styles.error__text}>No match for <u>{currentUrl.pathname}</u></p>
    </div>
    </>
  )
}

export default NotFoundPage;