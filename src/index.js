import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card';
import List from './List'
import STORE from './STORE';
import './index.css';


ReactDOM.render(<App store = {STORE}/>, document.getElementById('root'));