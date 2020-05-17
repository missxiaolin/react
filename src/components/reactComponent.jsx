/**
 * react中的组件：每一个组件都是一个单独的个体（数据私有、有自己完整的生命周期、有自己的视图）
 * 1、函数式组件
 * 2、基于react.component类创建组件
 * 3、react hook
 */
import React from 'react'
import PropTypes from 'prop-types'
import '../assets/vote.scss'


/**
 * 只要在js 中使用jsx 必须引入react
 * 简单：开发维护简单，渲染也简单，渲染速度快
 * 静态：只要把组件调取渲染完后，组件的内容将不在修改（函数式组件中没有自己的状态管控、生命周期等）
 * @param {*} props 
 */
// export default function Vote(props) {
//     return <div>
//         {props.title}
//         {props.children}
//     </div>
//  }

/**
 * 类组件
 * 继承
 *      1、原型继承
 *      2、call继承
 *      3、寄生组合继承 Object.create
 *      4、ES6中基于class继承
 * 基于第三方插件prop-types 设置属性的规则
 */
// export default class Vote extends React.Component {
//     // 给某个属性设置默认值
//     static defaultProps  = {
//         title: "设置标题"
//     }
//     static propTypes = {
//         title: PropTypes.string.isRequired
//     }
//     constructor(props) {
//         super()
//         this.state = {
//             time: new Date().toLocaleString()
//         }
//     }

//     render() {
//         // let time = new Date().toLocaleString()
//         return <div>测试{this.props.title}
//         <h2 ref="timeBox">{this.state.time}</h2>
//         </div>
//     }

//     componentDidMount() {
//         // 第一次加载组件渲染完毕
//         this.setState({
//             time: "sssss"
//         })

//         console.log(this.refs.timeBox)
//     }
// }

// export default class Vote extends React.Component {
//     // 设置传参默认值
//     static defaultProps =  {
//         supNum: 0,
//         oppNum: 0
//     }

//     // 设置传参规则
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         supNum: PropTypes.number,
//         oppNum: PropTypes.number
//     }

//     // 设置初始值
//     constructor(props) {
//         super(props)
//         this.state = {
//             supNum: this.props.supNum,
//             oppNum: this.props.oppNum,
//         }
//     }

//     render() {
//         let {supNum, oppNum} = this.state

//         return <div className="voteBox">
//             <header className="headerBox">
//                 <h3>{this.props.title}</h3>
//                 <span>N: {supNum + oppNum}</span>
//             </header>
//             <main className="mainBox">
//                 <p>支持人数：{supNum}</p>
//                 <p>反对人数：{oppNum}</p>
//                 <p>支持率：{this.getRatio()}</p>
//             </main>
//             <footer className="fotterBox">
//                 <button onClick={this.handle.bind(this, 'A')}>支持</button>
//                 <button onClick={this.handle.bind(this, 'B')}>反对</button>
//             </footer>
//         </div>
//     }

//     // 自定义使用方法
//     getRatio = () => {
//         let {supNum, oppNum} = this.state,
//             ratio = null,
//             total = supNum + oppNum

//         ratio = total === 0 ? 0 : supNum / total * 100

//         return `${ratio.toFixed(2)}%`
//     }

//     handle = (type, ev) => {
//         console.log(ev.currentTarget)
//         let {supNum, oppNum} = this.state
//         if (type === 'A') {
//             this.setState({
//                 supNum: supNum + 1
//             })
//             return
//         }
//         this.setState({
//             oppNum: oppNum + 1
//         })
//     }
// }

// class VoteMain extends React.Component {
//     render() {
//         let { supNum, oppNum } = this.props
//         return <main className="mainBox">
//             <p>支持人数：{supNum}</p>
//             <p>反对人数：{oppNum}</p>
//         </main>
//     }
// }

// class VoteFotter extends React.Component {
//     render() {
//         let { callback } = this.props
//         return <footer className="fotterBox">
//             <button onClick={ev => {
//                 callback('SUP', 10)
//             }}>支持</button>
//             <button onClick={ev => {
//                 callback('OPP', 5)
//             }}>反对</button>
//         </footer>
//     }
// }


// export default class Vote extends React.Component {
//     // 设置传参默认值
//     static defaultProps = {
//         supNum: 0,
//         oppNum: 0
//     }

//     // 设置传参规则
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         supNum: PropTypes.number,
//         oppNum: PropTypes.number
//     }

//     // 设置初始值
//     constructor(props) {
//         super(props)
//         this.state = {
//             supNum: this.props.supNum,
//             oppNum: this.props.oppNum,
//         }
//     }

//     render() {
//         let { supNum, oppNum } = this.state
//         return <div className="voteBox">
//             <header className="headerBox">
//                 <h3>{this.props.title}</h3>
//                 <span>N: {supNum + oppNum}</span>
//             </header>
//             <VoteMain supNum={supNum} oppNum={oppNum}></VoteMain>
//             <VoteFotter callback={this.handle}></VoteFotter>
//         </div>
//     }

//     handle = (type, num = 1) => {
//         let { supNum, oppNum } = this.state
//         this.setState({
//             supNum: type == 'SUP' ? supNum + num : supNum,
//             oppNum: type == 'OPP' ? oppNum + num : oppNum
//         })
//     }
// }

// 订阅发布
import em from './EventEmit'

class VoteMain extends React.Component {
    state = {
        supNum: 0,
        oppNum: 0
    }

    handle = type => {
        let { supNum, oppNum } = this.state
        type == 'SUP' ? this.setState({ supNum: supNum + 1 }) : this.setState({ oppNum: oppNum + 1 })
    }

    render() {
        let { supNum, oppNum } = this.state
        return <main className="mainBox">
            <p>支持人数：{supNum}</p>
            <p>反对人数：{oppNum}</p>
        </main>
    }

    componentDidMount() {
        // 订阅事件
        em.$on('mainHandle', this.handle)
    }
}

class VoteFotter extends React.Component {
    render() {
        let { callback } = this.props
        return <footer className="fotterBox">
            <button onClick={ev => {
                // 通知订阅方法执行
                em.$emit('mainHandle', 'SUP', 10)
                em.$emit('indexHandle')
            }}>支持</button>
            <button onClick={ev => {
                em.$emit('mainHandle', 'OPT', 5)
                em.$emit('indexHandle')
            }}>反对</button>
        </footer>
    }
}


export default class Vote extends React.Component {
    // 设置传参规则
    static propTypes = {
        title: PropTypes.string.isRequired,
        supNum: PropTypes.number,
        oppNum: PropTypes.number
    }

    state = {
        totle: 0
    }

    render() {
        let { supNum, oppNum } = this.state
        return <div className="voteBox">
            <header className="headerBox">
                <h3>{this.props.title}</h3>
                <span>N: {this.state.totle}</span>
            </header>
            <VoteMain supNum={supNum} oppNum={oppNum}></VoteMain>
            <VoteFotter></VoteFotter>
        </div>
    }

    componentDidMount() {
        em.$on('indexHandle', () => {
            this.setState({
                totle: this.state.totle + 1
            })
        })
    }
}