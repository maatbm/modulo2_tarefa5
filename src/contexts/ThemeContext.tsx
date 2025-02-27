import { createContext, useState } from "react";
import { ReactNode } from "react";

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light');
    
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
