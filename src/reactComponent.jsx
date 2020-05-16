/**
 * react中的组件：每一个组件都是一个单独的个体（数据私有、有自己完整的生命周期、有自己的视图）
 * 1、函数式组件
 * 2、基于react.component类创建组件
 * 3、react hook
 */
import React from 'react'
import PropTypes from 'prop-types'

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

export default class Vote extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="voteBox">
            <header className="headerBox">
                <h3>我是标题</h3>
                <span>N: 0</span>
            </header>
            <main className="mainBox">
                <p>支持人数：</p>
                <p>反对人数：</p>
                <p>支持率：</p>
            </main>
            <footer className="fotterBox">
                <button>支持</button>
                <button>反对</button>
            </footer>
        </div>
    }
}