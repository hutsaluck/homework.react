import './App.css'
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";
import {ThemeContext} from "./context/ContextProvider.tsx";
import {useState} from "react";

function App() {
    const [themeColor, setThemeColor] = useState<string>('light')
    
    return (
        <>
            <ThemeContext.Provider value={{
                theme: 'light',
                changeTheme: (theme) => console.log(theme)
            }}>
                <A/>
                <B/>
            </ThemeContext.Provider>
        </>
    )
}

export default App
