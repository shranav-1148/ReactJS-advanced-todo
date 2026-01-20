import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem"


function TodoList({ filter }){
    const { todos }  = useContext(TodoContext);

    // returning a filteres list of todos based on active filters
    const filteredTodos = todos.filter((todo) =>{
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });


    if (filteredTodos.length === 0){
        return <p>No todos yet. Add one</p>;
    }

    return (
        // Mapping each todo using the passed todos list from context
        <ul>
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;