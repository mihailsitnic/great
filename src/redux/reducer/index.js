import { combineReducers } from 'redux'
import pathReducer from './path'
import locationReducer from './location'
import selectorReducer from './selector'
import dataReducer from './data'

export default combineReducers({
    currentPath: pathReducer,
    currentLocation: locationReducer,
    selectorName: selectorReducer,
    selectorData: dataReducer
})