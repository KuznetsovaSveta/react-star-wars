import PropTypes from "prop-types";
import styles from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <div className={styles.info}>
        <ul className={styles.info__list}>
          {personInfo.map(({ title, data }) => {
            return (
              data && (
                <li key={title} className={styles.info__item}>
                  <span className={styles.info__title}>
                    {title}:
                  </span> {data}
                </li>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
};

PersonInfo.propTypes = {
  //   text: PropTypes.string,
};
export default PersonInfo;
