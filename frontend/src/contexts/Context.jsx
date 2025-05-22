import { createContext, useState } from "react";


export const ContextData = createContext()

const Context = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    const val = {
        theme,
        setTheme,
        toggleTheme
    }

    return (
        <ContextData.Provider value={val}>
            {children}
        </ContextData.Provider>
    )

}

export default Context