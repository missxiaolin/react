import * as TYPES from '../action-types'

/**
 * 每个reducer都管理自己单独的状态
 * @param state
 * @param action
 */

const initialState = {
    supNum: 0,
    oppNum: 0
}
export default function voteReducer(state = initialState, action) {
    let n = action.n ? action.n : 1
    // 深度克隆
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TYPES.VOTE_CHANGE_SUPNUM:
            state.supNum += n
            break
        case TYPES.VOTE_CHANGE_OPPNUM:
            state.oppNum += n
            break
        default:
            break
    }
    return state
}