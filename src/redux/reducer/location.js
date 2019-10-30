import { LOCATION_PATH } from '../constants'

export default (locationPath = '/', action) => {
    return action.type === LOCATION_PATH ? action.payload : locationPath
}