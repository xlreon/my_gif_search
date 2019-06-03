import { getGifs } from '../services'
import { message } from 'antd'

const AppActions = {
    UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT',
    SET_MODAL_VISIBILITY: 'SET_MODAL_VISIBILITY',
    FETCH_GIFS_SUCCESS: 'FETCH_GIFS_SUCCESS'
}

const updateSearchText = (searchText) => 
    dispatch =>
        dispatch({
            type: AppActions.UPDATE_SEARCH_TEXT,
            payload: searchText
        })

const setModalVisibility = (modalVisibility) =>
    dispatch =>
        dispatch({
            type: AppActions.SET_MODAL_VISIBILITY,
            payload: modalVisibility
        })


const getSearchGifs = (searchText) => 
    dispatch => {
        getGifs(searchText)
        .then(response => {
            dispatch({
                type: AppActions.FETCH_GIFS_SUCCESS,
                payload: response
            })
        })
        .catch(error => message.error(error.message))
    }

export {
    AppActions,
    updateSearchText,
    setModalVisibility,
    getSearchGifs
}