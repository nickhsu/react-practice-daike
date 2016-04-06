const team = (state = [], action) => {
    switch (action.type) {
        case 'APPLY_FILTER':
            console.log(action);
            console.log(`Filter by '${action.queryFiled}' and the id is '${action.queryId}'`);
            return state;
        default:
            return state;
    }
};

export default team