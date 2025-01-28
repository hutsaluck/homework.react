import {ButtonComponent} from "./ButtonComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ContextProvider.tsx";
import clsx from "clsx";

export const MenuComponent = () => {
    const {theme} = useContext(ThemeContext)

    return (
        // <div className="flex justify-between items-center my-5 mx-5">
        <div className={clsx('flex justify-between items-center py-5 px-5', {
            'bg-gray-100': theme === 'white',
            'bg-gray-600': theme === 'dark',
        })}>
            <p className={clsx('text-2xl font-extrabold uppercase', {
                'text-black': theme === 'white',
                'text-white': theme === 'dark',
            })}>
                Logo
            </p>
            <ul className="flex list-none gap-5">
                <li>
                    <ButtonComponent/>
                </li>
            </ul>
        </div>

    );
};