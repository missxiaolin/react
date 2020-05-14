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
class Vote extends React.Component {
    // 给某个属性设置默认值
    static defaultProps  = {
        title: "设置标题"
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    constructor(props) {
        super()
    }

    render() {
        return <div>测试{this.props.title}</div>
    }



}

export default Vote