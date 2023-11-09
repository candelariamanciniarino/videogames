import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store } from '../src/Redux/Store/store.js'
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
  <BrowserRouter>
 
    <App />
  
  </BrowserRouter>
  </Provider>,
)

