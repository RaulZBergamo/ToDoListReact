const titleReducer = (state = '', action) => {
    switch (action.type) {
        case 'setTitle':
            state = action.payload;
            return state;
        case 'display':
            return state;
        default:
            return state;
    }
}

export default titleReducer;