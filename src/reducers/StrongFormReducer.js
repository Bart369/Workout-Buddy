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
    move2: '',
    weights2: '',
    reps2: '',
    move3: '',
    weights3: '',
    reps3: '',
    move4: '',
    weights4: '',
    reps4: '',
    move5: '',
    weights5: '',
    reps5: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('this the state')
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