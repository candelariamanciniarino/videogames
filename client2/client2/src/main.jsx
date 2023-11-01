import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../src/Redux/Store/store.js'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3001"

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
 <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
