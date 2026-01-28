import {useSelector} from 'react-redux'

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const storeData = useSelector(state => state.favoriteReducer);
    
  return(
    <><h1>FavoritePage</h1></>
  )
}

export default FavoritesPage;