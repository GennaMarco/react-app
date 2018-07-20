import todoReducer from "./todo-list";

const initialState = {
    todo_list: []
};

const rootReducer = (state = initialState, action) => {
    let newState = state;
    newState = todoReducer(newState, action);

    return newState;
};

export default rootReducer;