import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './pages/App';
import store from './store'; 
import { Provider } from 'react-redux';

const element = <Provider store = {store}>
   <App />
</Provider>
ReactDOM.render(element, document.getElementById('root'));

