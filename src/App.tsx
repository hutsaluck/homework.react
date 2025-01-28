import {ThemeContext} from "./context/ContextProvider.tsx";
import {useState} from "react";
import {HomeComponent} from "./components/HomeComponent.tsx";
import {MenuComponent} from "./components/MenuComponent.tsx";

function App() {
    const [themeColor, setThemeColor] = useState<string>('white')
    
    return (
        <>
            <ThemeContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) => setThemeColor(themeValue)
            }}>
                <MenuComponent/>
                <HomeComponent/>
            </ThemeContext.Provider>
        </>
    )
}

export default App
