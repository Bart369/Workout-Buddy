import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { CARDIO_UPDATE } from './types'


export const cardioUpdate = ({ prop, value }) => {
    return {
        type: CARDIO_UPDATE,
        payload:{ prop, value }
    }
}

