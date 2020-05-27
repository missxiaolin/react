import * as TYPES from '../action-types'

const initialState = {
    supNum: 0,
    info: {}
}
export default function personalReducer(state = initialState, action) {
    let n = action.n ? action.n : 1
    // 深度克隆
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        
    }
    return state
}