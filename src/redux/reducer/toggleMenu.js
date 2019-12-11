import { MOBILE_MENU } from '../constants'

export default (toggle = false, action) => {
    return action.type === MOBILE_MENU ? !toggle : toggle
}
