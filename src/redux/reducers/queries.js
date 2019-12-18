const initialState = {
    searchKey:{
      query: 'Hello world'  
    },
    
}
const queries = (state = initialState, action) =>{
    switch (action.type) {
        case 'SEARCH_KEY':
            return {
                ...state,
                query: action.query
            }
        case 'QUERY_RESULTS':
            return {
                ...state,
                results: action.results
            }
        case 'QUERY_LINK':
            return {
                ...state,
                clicked: action.clicked
            }

        default:
            return state
    }
}

export default queries; 