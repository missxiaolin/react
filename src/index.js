import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss'
import Vote from './components/reactComponent'
import store from './store/index'


ReactDOM.render(<div className="name">
    <Vote store={store} />
</div>, document.getElementById('root'));
