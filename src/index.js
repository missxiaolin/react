import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss'
import Vote from './components/reactComponent'
import Count from './components/Count'

ReactDOM.render(<div className="name">
    {/* <Vote title="小北" supNum={0} oppNum={0}></Vote> */}
    <Count />
</div>, document.getElementById('root'));
