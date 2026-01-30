import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiVideo.module.css';
import { useEffect, useRef } from 'react';

const UiVideo = ({src, classes, playbackRate = 1.0}) => {
  // для того, чтобы устанавливать значение playbackRate, используем рефы
  // создаем реф
  const videoRef = useRef(null);

  useEffect(() => {
    // после didmount берется элемент, на который навешан реф, и добавляем свойство
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return(
    <><video className={cn(styles.video, classes)} loop autoPlay muted
    // и затем навешиваем реф на видео
    ref={videoRef}
    >
      <source src={src}/>
      </video></>
  )
}

UiVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
}
export default UiVideo;