import { combineReducers } from 'redux'
import AuthReducers from './AuthReducer'
import CardioFormReducer from './CardioFormReducer'
import CardioReducer from './CardioReducer'

export default combineReducers({
    auth: AuthReducers, // auth is equal to the object returned by AuthReducers
    cardioForm: CardioFormReducer, // cardioForm is equal to the object returned by CardioFormReducer
    cardio: CardioReducer,
    StrongForm: StrongFormReducer
})