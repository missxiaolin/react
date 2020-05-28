/**
 * 存储当前板块需要派发行为的action对象
 */
import * as TYPES from '../action-types'
export default {
    changeSupNum() {
        return {
            type: TYPES.VOTE_CHANGE_SUPNUM
        }
    },
    changeOppNum() {
        return {
            type: TYPES.VOTE_CHANGE_OPPNUM
        }
    }
}
