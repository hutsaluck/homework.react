import {useLocalStorage} from "../hook/useLocalStorage.tsx";
import * as React from "react";

export const StoredName = () => {
    const [name, setName] = useLocalStorage<string>("name", "defaultName");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-80 mx-auto">
            <p className="text-lg font-semibold text-gray-700">Stored name: <span className="text-blue-600">{name}</span></p>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter a new name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

    );
};