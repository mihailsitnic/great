import { AUDIO_PAGE } from '../constants'

export default (audio = 1, action) => {
    return action.type === AUDIO_PAGE ? action.payload : audio
}
