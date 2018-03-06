import {
    CARDIO_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    calories: '',
    duration: '',
    distance: '',
    date: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case CARDIO_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state
    }
}