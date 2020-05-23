import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss'
import Vote from './components/reactComponent'
import Input from './components/Input'

ReactDOM.render(<div className="name">
    <Vote title="测试标题"></Vote>
    <Input />
</div>, document.getElementById('root'));
