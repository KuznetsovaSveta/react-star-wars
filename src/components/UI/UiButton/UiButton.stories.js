import UiButton from "./UiButton.jsx";

export default {
  title: "Ui-Kit/UiButton",
  component: UiButton,
};

const props = {
  text: 'Hello',
  onClick: () => console.log('Button clicked'),
  disabled: false,
  theme: 'dark',
  classes: '',
}

export const Light = {
  args: {
    ...props,
    theme: "light",
  },
};

export const Dark = {
  args: {
    ...props,
    theme: "dark",
  },
};

export const Disabled = {
  args: {
    ...props,
    disabled: true,
  },
};
