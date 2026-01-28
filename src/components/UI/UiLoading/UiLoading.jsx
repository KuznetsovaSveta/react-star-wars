import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from 'classnames'

import loaderWhite from "./img/loading-white.svg";
import loaderBlue from "./img/loading-blue.svg";
import loaderBlack from "./img/loading-black.svg";
import styles from "./UiLoading.module.css";

const UiLoading = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);
  useEffect(() => {
    switch (theme) {
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      case "black":
        setLoaderIcon(loaderBlack);
        break;

      default:
        setLoaderIcon(loaderWhite);
        break;
    }
  }, []);
  return (
    <>
      <img src={loaderIcon} alt="loader" className={cn(styles.loader, isShadow && styles.shadow, classes)} />
    </>
  );
};

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};
export default UiLoading;
