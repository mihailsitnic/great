import { MATCH_PATH, LOCATION_PATH, SELECTOR, DATA } from '../constants'

export function matchPath(id) {
    return {
        type: MATCH_PATH,
        payload: id
    }
}

export function locationPath(id) {
    return {
        type: LOCATION_PATH,
        payload: id
    }
}

export function selectorName(id) {
    return {
        type: SELECTOR,
        payload: id
    }
}

export function selectorData() {
    return {
        type: DATA
    }
}