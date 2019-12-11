import { combineReducers } from 'redux'
import selectorReducer from './selector'
import dataReducer from './data'
import audioReducer from './audio'
import toggleMenu from './toggleMenu'

export default combineReducers({
    selectorName: selectorReducer,
    selectorData: dataReducer,
    audioPage: audioReducer,
    toggleMenu: toggleMenu
})