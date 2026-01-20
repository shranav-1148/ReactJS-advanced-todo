
// Creating predictable state updates to TODO apps
export const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        
        case 'TOGGLE_TODO':
            return state.map(todo => 
                todo.id === action.payload
                ? { ...todo, completed: !todo.completed}
                : todo
            );
        
        case 'DELETE_TODO':
            return state.filter(todo => todo.id != action.payload);
        
        case 'SET_TODOS':
            return action.payload;

        default:
            return state;
    }
};