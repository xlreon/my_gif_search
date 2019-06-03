import { createStore } from 'redux'
import reducers from '../reducers'

const initialState = {
    searchText: ""
}

let store = createStore(reducers)

export { store, initialState }
