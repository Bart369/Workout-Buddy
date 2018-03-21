import {
    RESET_STATE,
    STRONG_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
    move: '',
    weight: '',
    weights: '',
    reps: '',
    date: '',
}

export default (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case STRONG_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case RESET_STATE:
            return INITIAL_STATE // so when a workout is logged, reset the form for the next workout
        default:
            return state
    }
}