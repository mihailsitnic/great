import { combineReducers } from 'redux'
import pathReducer from './path'
import personReducer from './person'

export default combineReducers({
    currentPath: pathReducer,
    personName: personReducer
})