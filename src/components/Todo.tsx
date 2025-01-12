import {ITodo} from "../models/ITodo.ts";

interface TodoProps {
    item: ITodo
}

export const Todo = ({item}: TodoProps) => {
    return (
        <div
            className={`p-4 my-10 border rounded-2xl grid justify-center items-center cursor-pointer transition-shadow duration-500 hover:shadow-lg ${item.completed ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-gray-100'}`}>
            <h3 className="text-2xl font-semibold text-center mb-2">{item.todo}</h3>

            <div className="flex items-center justify-center space-x-2 mt-2">
                {item.completed ? (
                    <>
                        <span className="text-green-500">✔️</span>
                        <span className="text-green-500">Зроблено</span>
                    </>
                ) : (
                    <>
                        <span className="text-yellow-500">⌛</span>
                        <span className="text-yellow-500">В очікуванні</span>
                    </>
                )}
            </div>
        </div>


    );
};