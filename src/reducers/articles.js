import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
} from "../constants/articles-action-types";

const reducerMap = {};

reducerMap[ADD_ARTICLE] = (state , action) => ({
    ...state,
    articles: [
        ...state.articles,
        action.article
    ]
});

reducerMap[DELETE_ARTICLE] = (state , action) => ({
    ...state,
    articles: [
        ...state.articles.filter(function (article) {
            return article.id !== action.article.id;
        })
    ]
});

const articleReducer = (state, action) => {
    let newState = state;
    if (reducerMap[action.type]){
        newState = reducerMap[action.type](state, action);
    }
    return newState;
};

export default articleReducer;