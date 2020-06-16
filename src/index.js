import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';


ReactDOM.render(<App participants={store.participants} chatEvents={store.chatEvents}/>, document.getElementById('root'));