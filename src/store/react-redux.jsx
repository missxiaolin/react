import React from 'react'
import PropTypes from 'prop-types'

const ThemeContext = React.createContext()

/**
 * Provider 组件 store 注册到上下文react.createContext
 * @param {*} store
 */
export class Provider extends React.Component {
    // 设置传递的store
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    render() {
        return <ThemeContext.Provider value={{
            store: this.props.store
        }}>
            {this.props.children}
        </ThemeContext.Provider>
    }


}

/**
 * connect 组件
 */

export function connect(mapStateToProps, mapDispatchToProps) {
    return function connectHOC(Component) {// Component 最终渲染组件
        // 返回一个代理组件
        return class Proxy extends React.Component {
            
            static contextType = ThemeContext

            render() {
                return <ThemeContext.Consumer>
                    {context => {
                        return <Component  />
                    }}
                </ThemeContext.Consumer>
            }
            componentDidMount() {
                this.context.store.subscribe(() => {
                    this.forceUpdate()
                })
            }
        }
    }
}
