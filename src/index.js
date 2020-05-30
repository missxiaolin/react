import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import { Provider } from 'react-redux'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'antd/dist/antd.css'
import './assets/index.scss'
import Task from './components/Task';

ReactDOM.render(<Provider store={store}>
    <ConfigProvider locale={zhCN}>
        <Task />
    </ConfigProvider>
</Provider>, document.getElementById('root'));
