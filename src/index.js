import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss'
import Vote from './components/reactComponent'
import Count from './components/Count'

ReactDOM.render(<div className="name">
    <Vote title="测试标题"></Vote>
</div>, document.getElementById('root'));
