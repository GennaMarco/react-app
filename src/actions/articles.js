import {
    ADD_ARTICLE,
    UPDATE_ARTICLE,
    DELETE_ARTICLE
} from "../constants/articles-action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, article: article });
export const updateArticle = article => ({ type: UPDATE_ARTICLE, article: article });
export const deleteArticle = article => ({ type: DELETE_ARTICLE, article: article });
