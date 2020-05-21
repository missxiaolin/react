import React from 'react'
import PropTypes from 'prop-types'

/**
 * 创建一个上下文对象
 *  ThemeContext.provider
 */
let ThemeContext = React.createContext()

class CountButton extends React.Component {
    static contextType = ThemeContext

    render() {
        return <ThemeContext.Consumer>
            {context => {
                return <button onClick={ev => {
                    context.setNum()
                }}>累加</button>
            }}
        </ThemeContext.Consumer>
    }
}

class CountShow extends React.Component {
    static contextType = ThemeContext
    

    render() {
        return <div>
            {this.context.num}
        </div>
    }
}

export default class Count extends React.Component {
 
    state = {
        num: 0
    }   

    render() {
        return <ThemeContext.Provider value={{
            num: this.state.num,
            setNum: this.setNum
        }}>
            <h3>计数器</h3>
            <CountShow />
            <CountButton />
        </ThemeContext.Provider>
    }

    setNum = (num) => {
        this.setState({
            num: this.state.num + 1
        })
    }
}

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