import {
    ADD_ITEM,
    CHECK_ITEM
} from "../constants/todo-list-action-types";

export const addItem = item => ({ type: ADD_ITEM, item: item });
export const checkItem = item => ({ type: CHECK_ITEM, item: item });