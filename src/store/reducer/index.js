import { combineReducers } from 'redux'
/**
 * 合并reducer
 */
import voteReducer from './voteReducer'
import personalReducer from './personalReducer'

export default combineReducers({
    vote: voteReducer,
    personal: personalReducer
})

