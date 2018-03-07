import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { CARDIO_UPDATE, RESET_STATE } from './types'


export const cardioUpdate = ({ prop, value }) => {
    return {
        type: CARDIO_UPDATE,
        payload:{ prop, value }
    }
}

export const saveCardio = ({ name, calories, duration, distance, date }) => {
    const { currentUser } = firebase.auth()
    // firebase.auth.currentUser is the currently authenticated user

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/cardio`)
            .push({ name, calories, duration, distance, date })
                .then(() => {
                    dispatch({ type: RESET_STATE })
                    Actions.pop()
                })
    }
}

