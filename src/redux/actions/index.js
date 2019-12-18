export const searchKey = query => ({
     type: 'SEARCH_KEY',
     query,
});

export const queryResults = results => ({
     type: 'QUERY_RESULTS',
     results,
});

export const queryLink = clicked => ({
     type: 'QUERY_LINK',
     clicked,
});
