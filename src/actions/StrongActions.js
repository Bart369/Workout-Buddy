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