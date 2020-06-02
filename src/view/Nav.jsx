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
}

export default withRouter(Nav)