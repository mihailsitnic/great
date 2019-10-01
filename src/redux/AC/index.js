import { PATH } from '../constants'

export function increment(id) {
    return {
        type: PATH,
        payload: id
    }
}