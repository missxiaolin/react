const initialState = {
    n: 0
}
export default function personalReducer(state = initialState, action) {
    // 深度克隆
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'TEST':
            state.n++
            break
        default:
            
    }
    return state
}