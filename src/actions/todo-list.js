import {
    ADD_ITEM,
} from "../constants/todo-list-action-types";

export const addItem = item => ({ type: ADD_ITEM, item: item });