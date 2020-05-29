import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss'
import Vote from './components/reactComponent'
import store from './store/index'
import { Provider } from 'react-redux'


ReactDOM.render(<Provider store={store}>
    <Vote />
</Provider>, document.getElementById('root'));
