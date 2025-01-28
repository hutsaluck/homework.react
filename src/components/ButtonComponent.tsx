import { useContext, useState } from "react";
import { ThemeContext } from "../context/ContextProvider.tsx";
import clsx from "clsx";

export const ButtonComponent = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const [colorText, setColorText] = useState<string>("☀️");

    const handlerLight = () => {
        const newTheme = theme === "white" ? "dark" : "white";
        const newIcon = newTheme === "white" ? "☀️" : "🌙";
        setColorText(newIcon);
        changeTheme(newTheme);
    };

    return (
        <button
            onClick={handlerLight}
            className={clsx(
                "flex items-center justify-center px-5 py-3 rounded-full transition-all duration-300",
                {
                    "bg-white text-black shadow-lg hover:scale-110": theme === "white",
                    "bg-black text-white shadow-2xl hover:scale-110": theme === "dark",
                }
            )}
        >
            <span className="text-xl">{colorText}</span>
        </button>
    );
};
