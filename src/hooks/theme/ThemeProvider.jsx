import { useState } from 'react';
import { ThemeContext } from './themeContext';

const ThemeProvider = ({ children }) => {
	const [themeMode, setThemeMode] = useState('light');

    const setDarkTheme = () => setThemeMode("dark")
    const setLightTheme = () => setThemeMode("light")

    const contextValue = {
        themeMode,setDarkTheme,setLightTheme
    }
	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
