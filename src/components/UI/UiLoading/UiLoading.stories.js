import UiLoading from "./UiLoading.jsx";

export default {
  title: "Ui-Kit/UiLoading",
  component: UiLoading,
};

const props = {
  theme: 'black',
  isShadow: false,
  classes: '',
}

export const Black = {
  args: {
    ...props,
  },
};

export const Blue = {
  args: {
    ...props,
    theme: 'blue',
  },
};

export const White = {
  args: {
    ...props,
    theme: 'white',
    isShadow: true,
  },
};
