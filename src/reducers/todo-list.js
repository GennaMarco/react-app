import {
    ADD_ITEM,
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
            if (itemList.id === action.item.id){
                return {...itemList, isChecked: !action.item.isChecked}
            }
            else{
                return itemList;
            }
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