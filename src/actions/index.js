import { ADD_ARTICLE } from "../constants/articles-action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
