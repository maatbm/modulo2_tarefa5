import { createContext, useState } from "react";
import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { light } from "../themes/light";
import { dark } from "../themes/dark";

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light');
    
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    const themeObject = theme === 'light' ? light : dark;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={themeObject}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}
