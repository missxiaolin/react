import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss'
import store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}>
</Provider>, document.getElementById('root'));
