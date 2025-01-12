import {ITodo} from "../models/ITodo.ts";

interface TodoProps {
    item: ITodo
}

export const Todo = ({item}: TodoProps) => {
    return (
        <div
            className="my-10 border border-gray-300 rounded-2xl grid justify-center items-center cursor-pointer transition-shadow duration-500 hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-2">{item.title}</h3>
        </div>
    );
};