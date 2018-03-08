import {
    RESET_STATE,
    CARDIO_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    calories: '',
    duration: '',
    distance: '',
    weight: '',
    date: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case CARDIO_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case RESET_STATE:
            return INITIAL_STATE // so when a workout is logged, reset the form for the next workout
        default:
            return state
    }
}


// [action.payload.prop] this is key interpolation
// the key that we are adding to the state object will be determined at 
// run time. so if we call our action creator with a prop of name that code
// in the square bracket will become a property of name and look like this 
// { ...state, name: action.payload.value } which will then update or add
// a name property in our state object.