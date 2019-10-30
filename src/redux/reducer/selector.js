import { SELECTOR } from '../constants'

export default (selector = '', action) => {
    return action.type === SELECTOR ? action.payload : selector
}
