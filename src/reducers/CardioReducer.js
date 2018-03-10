import { FETCH_CARDIO_SUCCESS } from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FETCH_CARDIO_SUCCESS:
        // console.log(action)
            return action.payload
        default:
            return state
    }
}

// example of what our action object looks like when console logged: 

// Object {
//     "payload": Object {
//                   "-L6yudjI9dVrbFEuRavt": Object {
//                                              "calories": "100",
//                                              "date": "",
//                                              "distance": "0",
//                                              "duration": "60",
//                                              "name": "First test no dates",
//              },
//                  "-L6yufMHZpFqGHajIIC7": Object {
//                                              "calories": "100",
//                                              "date": "",
//                                              "distance": "0",
//                                              "duration": "60",
//                                              "name": "Second test no dates",
//              }