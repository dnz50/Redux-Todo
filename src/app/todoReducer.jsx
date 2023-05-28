const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLEAR':
            return {
                todos: []
            };
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload]
            };
        case 'DELL_TODO':
            //silinecek todoların id sine eşit olmayanlarla yeni bir todo oluşturduk return kısmında güncelledik
            const filteredTodos = state.todos.filter((item) => item.id !== action.payload)
            return {
                todos: filteredTodos
            };
        case 'EDIT_TODO':
            const cloneTodos = [...state.todos]
            const index = state.todos.findIndex((item) => item.id === action.payload);
            //elemanı güncelle
            const updatedItem = { ...state.todos[index], isDone: !state.todos[index].isDone }
            cloneTodos.splice(index, 1, updatedItem);
            return {
                todos: cloneTodos
            };
        case 'SET_TODOS':
            return {
                todos: action.payload
            };

        default:
            return state;
    }

};

export default todoReducer