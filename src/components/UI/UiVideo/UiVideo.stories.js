import UiVideo from "./UiVideo.jsx";
import video from './video/video.mp4'

export default {
  title: "Ui-Kit/UiVideo",
  component: UiVideo,
};

const props = {
  src: video,
  classes: '',
  playbackRate: 1.0,
}

export const Default = {
  args: {
    ...props,
  },
};
