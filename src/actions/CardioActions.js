import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { 
    CARDIO_UPDATE, 
    RESET_STATE,
    FETCH_CARDIO_SUCCESS,
    CARDIO_SAVE_EDIT
 } from './types'


export const cardioUpdate = ({ prop, value }) => {
    return {
        type: CARDIO_UPDATE,
        payload:{ prop, value }
    }
}

export const saveCardio = ({ name, calories, duration, distance, weight, date }) => {
    const { currentUser } = firebase.auth()
    // firebase.auth.currentUser is the currently authenticated user

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/cardio`)
            .push({ name, calories, duration, distance, weight, date })
                .then(() => {
                    dispatch({ type: RESET_STATE })
                    Actions.pop()
                })
    }
}

// any time we get any data or 'value' from the ref below,
// run the fat arrow function. snapshot is an object that
// describes the data and to get the actual value of that 
// data we call snapshot.val()
export const fetchCardio = () => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/cardio`)
            .on('value', snapshot => {
                dispatch({
                    type: FETCH_CARDIO_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}

export const saveEditCardio = ({ name, calories, duration, distance, weight, date, uid }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/cardio/${uid}`)
            .set({ name, calories, duration, distance, weight, date,})
            .then(() => {
                dispatch({ type: RESET_STATE })
                Actions.pop()
            })
    }
}

export const deleteCardio = ({ uid }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/cardio/${uid}`)
    }
}

