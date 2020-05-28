const initialState = {
    supNum: 0,
    info: {}
}
export default function personalReducer(state = initialState, action) {
    // 深度克隆
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        
    }
    return state
}