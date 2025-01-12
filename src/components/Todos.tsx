import {Todo} from "./Todo.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import {ITodoResponse} from "../models/ITodoResponse.ts";
import {getAllTodos} from "../services/api.service.ts";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    
    useEffect(() => {
        getAllTodos().then(({todos}:ITodoResponse) => setTodos(todos))
    }, []);

    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)
            }
        </div>
    );
};