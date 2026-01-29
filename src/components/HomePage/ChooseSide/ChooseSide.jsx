import PropTypes from "prop-types";
import cn from "classnames";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider.jsx";
import imgNeitralTheme from "./img/neitral.jpg";
import imgLightTheme from "./img/light-side.jpg";
import imgDarkTheme from "./img/dark-side.jpg";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ classes, theme, text, img }) => {
  const isTheme = useTheme();
  return (
    <>
      <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
        <div className={styles.item__text}>{text}</div>
        <img src={img} alt={text} className={styles.item__img} />
      </div>
    </>
  );
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  // не очень красивый код, т.к. много повторяется
  // поэтому перепишем с использованием массива объектов
  // return (
  //   <>
  //     <ChooseSideItem
  //       theme={THEME_LIGHT}
  //       text="Light Side"
  //       img={imgLightTheme}
  //     />
  //     <ChooseSideItem theme={THEME_DARK} text="Dark Side" img={imgDarkTheme} />
  //     <ChooseSideItem
  //       theme={THEME_NEITRAL}
  //       text="I'm Han Solo"
  //       img={imgNeitralTheme}
  //     />
  //   </>
  // );

  const themes = [
    {
      classes: styles.item__light,
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightTheme,
    },
    {
      classes: styles.item__dark,
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkTheme,
    },
    {
      classes: styles.item__neitral,
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgNeitralTheme,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        {themes.map(({ theme, text, img, classes }, index) => (
          <ChooseSideItem
            key={index}
            theme={theme}
            text={text}
            img={img}
            classes={classes}
          />
        ))}
      </div>
    </>
  );
};

export default ChooseSide;
