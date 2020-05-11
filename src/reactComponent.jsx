/**
 * react中的组件：每一个组件都是一个单独的个体（数据私有、有自己完整的生命周期、有自己的视图）
 * 1、函数式组件
 * 2、基于react.component类创建组件
 * 3、react hook
 */
import React from 'react'

/**
 * 只要在js 中使用jsx 必须引入react
 * 简单：开发维护简单，渲染也简单，渲染速度快
 * 静态：只要把组件调取渲染完后，组件的内容将不在修改
 * @param {*} props 
 */
export default function Vote(props) {
    return <div>
        {props.title}
        {props.children}
    </div>
 }