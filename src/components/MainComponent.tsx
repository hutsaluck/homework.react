import {useContext} from "react";
import {ThemeContext} from "../context/ContextProvider.tsx";
import clsx from "clsx";

export const MainComponent = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={clsx('max-w-xl text-center space-y-8 p-6 rounded-lg shadow-md', {
            'bg-gray-800': theme === 'dark',
            'bg-white': theme === 'white',
        })}>
            <h1 className={clsx('text-4xl font-bold', {
                'text-gray-800': theme === 'white',
                'text-white': theme === 'dark',
            })}>
                Component Tree Demo
            </h1>
            <p className={clsx('text-lg', {
                'text-gray-600': theme === 'white',
                'text-gray-300': theme === 'dark',
            })}>
                This is an example of a deep component tree with a context that manages theme switching.
            </p>
        </div>
    );
};