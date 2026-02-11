import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import {REPO_NAME} from '@constants/repo.js'

import ThemeProvider from "@context/ThemeProvider.jsx";

import store from "@store/store.js";

import App from "@containers/App/App";

import "@styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter basename={`/${REPO_NAME}/`}> */}
      <BrowserRouter>
      {/* <BrowserRouter> */}
      {/* ThemeProvider - все, что в нем есть, передается в другие компоненты*/}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
