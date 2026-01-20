import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

// Passing the todo data object
function TodoItem({ todo }){
    // Passing dispatch from context
    const { dispatch } = useContext(TodoContext);

    return (
        // Returning a list item that on click will toggle todo and make frontend design changes accordingly
        <li
            onClick={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo.id})
                }  
            style={{
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.6 : 1  
            }}
        >
            {todo.text}
            
            <button
            // Button to dispatch delete todo action
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch({ type: 'DELETE_TODO', payload: todo.id});
                }}
                style={{ marginLeft: '10px' }}
            >X</button>
        </li>
    );
}

export default TodoItem;