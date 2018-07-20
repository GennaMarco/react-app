import {
    ADD_ITEM,
} from "../constants/todo-list-action-types";

const reducerMap = {};

reducerMap[ADD_ITEM] = (state , action) => ({
    ...state,
    articles: [
        ...state.articles,
        action.article
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