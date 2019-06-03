
import { AppActions } from '../actions'
import { initialState } from '../store'


function reducer(state=initialState,action) {
    const { type, payload } = action
    switch(type) {
        case AppActions.UPDATE_SEARCH_TEXT:
            return {...state, searchText: payload}
        case AppActions.SET_MODAL_VISIBILITY:
            return { ...state, modalVisibility: payload, gifs: null }
        case AppActions.FETCH_GIFS_SUCCESS:
            return { ...state, gifs: payload}
        default:
            return state
    }
}

export default reducer