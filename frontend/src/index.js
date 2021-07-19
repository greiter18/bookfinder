import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import Root from "./root"
// import configureStore from './store/store';

// let store = configureStore({})

ReactDOM.render(<Root/>, document.getElementById('root'));

window.axios = axios;