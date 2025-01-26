import {useContext} from "react";
import {ThemeContext} from "../context/ContextProvider.tsx";

export const BA = () => {
    const {changeTheme} = useContext(ThemeContext)
    
    const handler = () => {
        changeTheme('dark')
    };
    return (
        <div>
            <button
            onClick={handler}
            >change theme</button>
        </div>
    );
};