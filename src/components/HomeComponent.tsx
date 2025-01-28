import {MainComponent} from "./MainComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ContextProvider.tsx";
import clsx from "clsx";

export const HomeComponent = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <main className={clsx('flex items-center justify-center h-screen', {
            'bg-gray-100': theme === 'white',
            'bg-gray-400': theme === 'dark',
        })}>
            <MainComponent/>
        </main>
    );
};