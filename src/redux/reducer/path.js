import { PATH } from '../constants'

export default (path = '/docs', action) => {
    return action.type === PATH ? action.payload : path
}
