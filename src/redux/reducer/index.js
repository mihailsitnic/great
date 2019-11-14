import { combineReducers } from 'redux'
import selectorReducer from './selector'
import dataReducer from './data'
import audioReducer from './audio'

export default combineReducers({
    selectorName: selectorReducer,
    selectorData: dataReducer,
    audioPage: audioReducer
})