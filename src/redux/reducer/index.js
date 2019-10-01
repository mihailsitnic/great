import { combineReducers } from 'redux'
import pathReducer from './path'

export default combineReducers({
    currentPath: pathReducer
})