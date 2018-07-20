import {
    ADD_ITEM,
} from "../constants/todo-list-action-types";

const reducerMap = {};

reducerMap[ADD_ITEM] = (state , action) => ({
    ...state,
    todo_list: [
        ...state.todo_list,
        action.item
    ]
});

const todoReducer = (state, action) => {
    let newState = state;
    if (reducerMap[action.type]){
        newState = reducerMap[action.type](state, action);
    }
    return newState;
};

export default todoReducer;