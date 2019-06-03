import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage'
import {Provider} from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}

export default App;
