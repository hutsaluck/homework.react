import {Todo} from "./Todo.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data:ITodo[]) => {
                setTodos(data)
            });
    }, []);

    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)
            }
        </div>
    );
};