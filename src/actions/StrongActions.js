import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    STRONG_UPDATE,
    RESET_STATE,
    FETCH_STRONG_SUCCESS
} from './types'


export const strongUpdate = ({ prop, value }) => {
    return {
        type: STRONG_UPDATE,
        payload: { prop, value }
    }
}

export const saveStrong = ({ move, weights, reps, weight, date, move2, weights2, reps2, weight2, move3, weights3, reps3, weight4, move5, weights5, reps5, weight5 }) => {
    const { currentUser } = firebase.auth()
    // firebase.auth.currentUser is the currently authenticated user

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/strength`)
            .push({ move, weights, reps, weight, date, move2, weights2, reps2, weight2, move3, weights3, reps3, weight4, move5, weights5, reps5, weight5 })
            .then(() => {
                dispatch({ type: RESET_STATE })
                Actions.pop()
            })
    }
}


export const fetchStrong = () => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/strength`)
            .on('value', snapshot => {
                dispatch({
                    type: FETCH_STRONG_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}