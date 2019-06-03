const AppActions = {
    UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT',
    SET_MODAL_VISIBILITY: 'SET_MODAL_VISIBILITY'
}

const updateSearchText = (searchText) => {
    return {
        type: AppActions.UPDATE_SEARCH_TEXT,
        payload: searchText
    }
}

const setModalVisibility = (modalVisibility) => {
    return {
        type: AppActions.SET_MODAL_VISIBILITY,
        payload: modalVisibility
    }
}

export {
    AppActions,
    updateSearchText,
    setModalVisibility
}