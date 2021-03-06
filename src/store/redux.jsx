/**
 * createStore(reducer)创建容器，并且基于reducer可以管理容器中的状态
 */

import { func } from "prop-types"

export function createStore(reducer) {
    // 构建状态池和事件池
    let state,
        listeners = []

    function getState() {
        return JSON.parse(JSON.stringify(state))
    }

    // 向事件池增加方法
    function subscribe(func) {
        if (typeof func !== 'function') {
            throw new Error('Expected the listener to be a function')
        }
        !listeners.includes(func) ? listeners.push(func) : null
        return function unsubscribe() {
            listeners = listeners.filter(item => {
                return item !== func
            })
        }
    }

    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(item => {
            typeof item === 'function' ? item() : null
        })
    }

    dispatch({
        type: '@@redux/INIT'
    })

    return {
        getState,
        subscribe,
        dispatch
    }
}

/**
 * combineReducers 合并reducer
 */
export function combineReducers(reducers) {
    return function reducer(state = {}, action) {
        // state 容器重的总状态{computed: {}, vote: {}}
        // 每一次派发执行总得reducer，都会让每一个模块下的reducer执行
        for (let key in reducers) {
            if (!reducers.hasOwnProperty(key)) break
            state[key] = reducers[key](state[key], action)
        }
        return state
    }
}