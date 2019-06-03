
import { AppActions } from '../actions'
import { initialState } from '../store'


function reducer(state=initialState,action) {
    const { type, payload } = action
    switch(type) {
        case AppActions.UPDATE_SEARCH_TEXT:
            return {...state, searchText: payload}
        case AppActions.SET_MODAL_VISIBILITY:
            return { ...state, modalVisibility: payload }
        default:
            return state
    }
}

export default reducer