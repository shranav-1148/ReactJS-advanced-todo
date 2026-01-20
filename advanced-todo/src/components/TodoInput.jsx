import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";


function TodoInput(){
    const [text, setText] = useState('');
    const { dispatch } = useContext(TodoContext);

    // Handling submit of form to dispatch action to todoReducer
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        // Dispatching an action add todo with data id, text and completion status
        // UI doesn't directly modify state, reducer will
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                text: text.trim(),
                completed: false
            }
        });

        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoInput;