const AppActions = {
    UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT'
}

const updateSearchText = (searchText) => {
    return {
        type: AppActions.UPDATE_SEARCH_TEXT,
        searchText
    }
}

export {
    AppActions,
    updateSearchText
}