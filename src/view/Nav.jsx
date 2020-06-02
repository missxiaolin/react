import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        console.log(this.props)
        return <div>
            <header>
                <Link to="/cs">测试链接1</Link>
                <Link to="/">测试内容2</Link>
            </header>
        </div>
    }

    componentWillMount() { // 如果渲染是不同组件，上一个组件销毁，下一个组件重新创建（生命周期重头开始）
        console.log('ok')
    }
}

export default withRouter(Nav)