import { combineReducers } from 'redux';
import transferReducer from './transferReducer'

const rootReducer = combineReducers({
transfer:transferReducer
})

export default rootReducer;