import { SELECTOR, DATA, AUDIO_PAGE, MOBILE_MENU } from '../constants'


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

export function audioPage(id) {
    return {
        type: AUDIO_PAGE,
        payload: id
    }
}

export function toggleMenu() {
    return {
        type: MOBILE_MENU
    }
}