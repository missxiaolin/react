import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
    render() {
        console.log(this.props)
        return <div>
            <header>
                <a onClick={ev => {
                    console.log(this.props)
                    // this.props.history.push('/cs')
                }}>测试链接1</a>
                <a onClick={ev => {
                    // this.props.history.push('/')
                }}>测试链接2</a>
            </header>
        </div>
    }
}

export default withRouter(Nav)