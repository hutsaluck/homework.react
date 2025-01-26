import {createContext} from "react";

type ContextValueType = {
    theme: string,
    changeTheme: (theme: string) => void,
}

const defaultValue: ContextValueType = {
    theme: 'light',
    changeTheme: (theme) => console.log(theme)
}
export const ThemeContext = createContext<ContextValueType>(defaultValue)