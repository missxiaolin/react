import React from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/index'

class Text extends React.Component {

    render() {
        return <div>
            测试{this.props.n}
            <button onClick={this.props.change}>测试派发</button>
        </div>
    }
}

export default connect(state => state.personal, actions.personal)(Text)