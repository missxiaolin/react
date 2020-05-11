import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Vote from './reactComponent'

ReactDOM.render(<div className="name">
    <Vote title="测试">
        <span>sss</span>
    </Vote>
</div>, document.getElementById('root'));
