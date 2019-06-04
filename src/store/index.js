import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {
  searchText: "",
  modalVisibility: false,
  gifs: null
};

let store = createStore(reducers, applyMiddleware(thunk));

export { store, initialState };
