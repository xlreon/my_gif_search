import { createStore } from 'redux'
import reducers from '../reducers'

const initialState = {
    searchText: "",
    modalVisibility: false
}

let store = createStore(reducers)

export { store, initialState }
