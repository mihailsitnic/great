import { MATCH_PATH } from '../constants'

export default (path = '/', action) => {
    return action.type === MATCH_PATH ? action.payload : path
}
