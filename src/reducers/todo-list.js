import {
    ADD_ITEM,
    DELETE_ITEM,
    CHECK_ITEM
} from "../constants/todo-list-action-types";

const reducerMap = {};

reducerMap[ADD_ITEM] = (state , action) => ({
    ...state,
    todo_list: [
        ...state.todo_list,
        action.item
    ]
});

reducerMap[CHECK_ITEM] = (state , action) => ({
    ...state,
    todo_list: [
        ...state.todo_list.map(function (itemList) {
            return itemList.id === action.item.id ? {...itemList, isChecked: !action.item.isChecked} : itemList;
        })
    ]
});

reducerMap[DELETE_ITEM] = (state , action) => ({
    ...state,
    todo_list: [
        ...state.todo_list.filter(function (item) {
            return item.id !== action.item.id;
        })
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