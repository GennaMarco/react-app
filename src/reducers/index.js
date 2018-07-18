import articleReducer from "./articles";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    let newState = state;
    newState = articleReducer(newState, action);

    return newState;
};

export default rootReducer;