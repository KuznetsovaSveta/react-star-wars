import React, { useContext, useState } from "react";

import {changeCssVariables} from '@services/changeCssVariables.js'

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = React.createContext();

// children принимает все дочерние элементы, которые поступают в App
export const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(null);

    const change = name => {
        // меняем тему и вызываем changeCssVariables
        setTheme(name);
        changeCssVariables(name);
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            change,
        }}
        {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

// создали хук
export const useTheme = () => useContext(ThemeContext);