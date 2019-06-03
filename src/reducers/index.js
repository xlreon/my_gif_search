
import { AppActions } from '../actions'
import { initialState } from '../store'


function reducer(state=initialState,action) {
    const { type, searchText } = action
    switch(type) {
        case AppActions.UPDATE_SEARCH_TEXT:
            return {...state, searchText}
        default:
            return state
    }
}

export default reducer