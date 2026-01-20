import { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from '../reducer/todoReducer';


export const TodoContext = createContext();

// Object to load and save to localStorage
export const TodoProvider = ({ children }) =>  {
    // the global todo list
    const [todos, dispatch] = useReducer(todoReducer, []);

    // Load from LocalStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('todos'));

        if (stored){
            dispatch({ type: 'SET_TODOS', payload: stored });
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}