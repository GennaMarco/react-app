import {
    ADD_ARTICLE,
    UPDATE_ARTICLE,
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

reducerMap[UPDATE_ARTICLE] = (state , action) => ({
    ...state,
    articles: [
        ...state.articles.map( (article) => {
            if (article.id === action.article.id){
                //ritorna una copia dell'oggetto modificato
                return JSON.parse(JSON.stringify(action.article));
            }
            else {
               return article;
            }
        } )
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