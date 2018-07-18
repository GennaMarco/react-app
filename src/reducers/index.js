const initialState = {
    articles: [
        {title: 'test', id: 1},
        {title: 'test-2', id: 2},
        ]
};
const rootReducer = (state = initialState, action) => state;
export default rootReducer;