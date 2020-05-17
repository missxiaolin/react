import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss'
import Vote from './components/reactComponent'

ReactDOM.render(<div className="name">
    <Vote title="小北" supNum={10} oppNum={20}></Vote>
</div>, document.getElementById('root'));
