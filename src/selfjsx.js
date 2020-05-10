/**
 * createElement 创建虚拟dom 对象
 */
export function createElement(type, props, ...childs) {
    let jsxOBJ = {
        type,
        props: {},
        key: null,
        ref: null
    }
    if (props) {
        // => 处理key ref
        if (props.hasOwnProperty('key')) {
            jsxOBJ.key = props.key
            delete props.key
        }
        if (props.hasOwnProperty('ref')) {
            jsxOBJ.ref = props.ref
            delete props.ref
        }
        jsxOBJ.props = Object.assign(jsxOBJ.props, props)
    }
    // childs 处理
    if (childs.length > 0) {
        childs = childs.length === 1 ? childs[0] : childs
        jsxOBJ.props.children = childs
    }


    return jsxOBJ
}

/**
 * render 虚拟dome变成真实dome
 */
export function render(jsxOBJ, container, callback) {
    let {
        type,
        props
    } = jsxOBJ
    // 1.根据type创建dome元素对象
    let element = document.createElement(type)
    // 1.1根据props中的属性，依次给创建的元素进行设置
    for (let key in props) {
        if (!props.hasOwnProperty(key)) break
        // 1.2 关于某些属性特殊处理 className/style/children
        if (key === 'className') {
            element.className = props['className']
            continue
        }
        if (key === 'style') {
            let styOBJ = props['style']
            for (let styKey in styOBJ) {
                if (!styOBJ.hasOwnProperty(styKey)) break
                element['style'][styKey] = styOBJ[styKey]
            }
            continue
        }
        if (key === 'children') {
            let val = props['children'],
                childrenArr = Array.isArray(val) ? val : [val]
            // 1.3 迭代所有子元素，如果是字符串直接插入容器，如果是1个新的虚拟dom对象递归调用reder
            childrenArr.forEach(item => {
                if (typeof item === 'string') {
                    element.appendChild(document.createTextNode(item))
                    return
                }
                render(item, element)
            })
            continue
        }
        element.setAttribute(key, props[key])
    }
    // 2.把创建的元素对象添加到指定对象
    container.appendChild(element)
    callback && callback()
}