import { PERSON } from '../constants'

export default (person = 'Александр Мень', action) => {
    return action.type === PERSON ? action.payload : person
}
