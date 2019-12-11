import { DATA } from '../constants'
import aData from 'data/a'
import bData from 'data/b'
import cData from 'data/c'
import dData from 'data/d'

const globalObject = {
    a: {
        id: aData.id,
        author: aData.author,
        selector: aData.selector,
        meet: aData.meet,
        audio: aData.audio,
        video: aData.video,
        books: aData.books
    },
    b: {
        id: bData.id,
        author: bData.author,
        selector: bData.selector,
        meet: bData.meet,
        audio: bData.audio,
        books: bData.books
    },
    c: {
        id: cData.id,
        author: cData.author,
        selector: cData.selector,
        meet: cData.meet,
        audio: cData.audio,
        books: cData.books
    },
    d: {
        id: dData.id,
        author: dData.author,
        selector: dData.selector,
        meet: dData.meet,
        video: dData.video
    },
}

export default (data = globalObject, action) => {
    return action.type === DATA ? action.payload : {...data}
}
