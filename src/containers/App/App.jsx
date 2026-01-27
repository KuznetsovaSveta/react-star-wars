import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import routesConfig from "@routes/routesConfig.js";

import Header from '@components/Header/Header.jsx'

import styles from './App.module.css'

const App = () => {
  return (
    <>
      
      <div className={styles.wrapper}>
        <Header />

          {/* невизуальные компоненты, которые видеть не будем */}
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                // element={route.element()}
                element={<route.element />}
              />
            ))}
            ;
          </Routes>
          </div>
      

      {/* <PeoplePage /> */}
    </>
  );
};

export default App;
