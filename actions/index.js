export const applyFilter = (queryField, queryId) => {
    return {
        type: 'APPLY_FILTER',
        queryFiled: queryField,
        queryId: queryId
    }
};