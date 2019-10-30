import { DATA } from '../constants'
import aData from 'data/a'
import bData from 'data/b'
import cData from 'data/c'
import dData from 'data/d'

const globalObject = {
    a: {
        meet: aData.meet,
        audio: aData.audio,
        video: aData.video,
        books: aData.books
    },
    b: {
        meet: bData.meet,
    },
    c: {
        meet: cData.meet,
    },
    d: {
        meet: dData.meet,
    },
}

export default (data = globalObject, action) => {
    return action.type === DATA ? action.payload : {...data}
}
