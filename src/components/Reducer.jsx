import React, { useReducer } from 'react'


let initailState = {
    n: 0,
    m: 0
}

/**
 * @param {*} state 容器当前状态
 * @param {*} actions 基于dispatch派发的行为操作
 */
function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE-N':
            state = {...state, n: action.payload}
            break
        case 'CHANGE-M':
            state = {...state, m: action.payload}
            break
        default :
            break
    }
    return state
}

export default function ReducerBox() {
    const [state, dispatch] = useReducer(reducer, initailState)
    let {n, m} = state

    n = parseInt(n)
    m = parseInt(m)
    let totle = isNaN(n + m) ? 0 : n + m
    
    return <div>
        <input type="text" value={n} onChange={ev => {
            dispatch({
                type: 'CHANGE-N',
                payload: ev.target.value
            })
        }}/>
        +
        <input type="text" value={m} onChange={ev => {
            dispatch({
                type: 'CHANGE-M',
                payload: ev.target.value
            })
        }}/>
        =
        <span>{totle}</span>
    </div>
}