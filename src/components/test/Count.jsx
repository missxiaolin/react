import React from 'react'
import PropTypes from 'prop-types'

/**
 * React.PureComponent
 */
// 比较两个对象 如果属性值是基本类型的，我们只需要比较是否一样
function shallowEqual(obj1, obj2) {
    let flag = true
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return flag
}
class CountShow extends React.Component {

    render() {
        return <div>
            {this.props.num}
        </div>
    }
}

export default class Count extends React.PureComponent {
 
    state = {
        num: 0
    }   

    render() {
        return <div>
            <CountShow num={this.state.num} />
            <button onClick={ev => {
                this.setState({
                    num: this.state.num + 1
                })
            }}>累加</button>
        </div>
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !shallowEqual(this.state, nextState) || !shallowEqual(this.props, nextProps)
    // }
}

/**
 * 创建一个上下文对象
 *  ThemeContext.provider
 */
// let ThemeContext = React.createContext()

// class CountButton extends React.Component {
//     static contextType = ThemeContext

//     render() {
//         return <ThemeContext.Consumer>
//             {context => {
//                 return <button onClick={ev => {
//                     context.setNum()
//                 }}>累加</button>
//             }}
//         </ThemeContext.Consumer>
//     }
// }

// class CountShow extends React.Component {
//     static contextType = ThemeContext
    

//     render() {
//         return <div>
//             {this.context.num}
//         </div>
//     }
// }

// export default class Count extends React.Component {
 
//     state = {
//         num: 0
//     }   

//     render() {
//         return <ThemeContext.Provider value={{
//             num: this.state.num,
//             setNum: this.setNum
//         }}>
//             <h3>计数器</h3>
//             <CountShow />
//             <CountButton />
//         </ThemeContext.Provider>
//     }

//     setNum = (num) => {
//         this.setState({
//             num: this.state.num + 1
//         })
//     }
// }

// class CountButton extends React.Component {
//     static contextTypes = {
//         setNum: PropTypes.func
//     }

//     render() {
//         return <>
//             <button onClick={ev => {
//                 this.context.setNum()
//             }}>累加</button>
//         </>
//     }
// }

// class CountShow extends React.Component {
//     static contextTypes = {
//         num: PropTypes.number
//     }

//     render() {
//         return <div>
//             {this.context.num}
//         </div>
//     }
// }

// export default class Count extends React.Component {
//     static childContextTypes = {
//         num: PropTypes.number,
//         setNum: PropTypes.func
//     }

//     getChildContext() {
//         return {
//             num: this.state.num,
//             setNum: this.setNum
//         }
//     }

//     state = {
//         num: 0
//     }

//     render() {
//         return <div>
//             <h3>计数器</h3>
//             <CountShow />
//             <CountButton />
//         </div>
//     }

//     setNum = (num) => {
//         this.setState({
//             num: this.state.num + 1
//         })
//     }
// }