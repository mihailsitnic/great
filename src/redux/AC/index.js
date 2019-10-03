import { PATH, PERSON } from '../constants'

export function increment(id) {
    return {
        type: PATH,
        payload: id
    }
}

export function personName(id) {
    return {
        type: PERSON,
        payload: id
    }
}