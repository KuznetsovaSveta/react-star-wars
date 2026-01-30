import { useState } from "react";
import UiInput from "./UiInput.jsx";

export default {
  title: "Ui-Kit/UiInput",
  component: UiInput,
};

const props = {
  value: "",
  handleInputChange: () => console.log("Input Change"),
  placeholder: "Placeholder",
  classes: "",
};

export const Default = {
  args: props,
  render: (args) => {
    const [value, setValue] = useState('');

    const handleInputChange = (newValue) => {
      setValue(newValue);
    };

    return (
      <UiInput {...args} value={value} handleInputChange={handleInputChange} />
    );
  },
};
