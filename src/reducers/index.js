import { combineReducers } from 'redux'
import AuthReducers from './AuthReducer'
import CardioFormReducer from './CardioFormReducer'
import CardioReducer from './CardioReducer'
import StrongFormReducer from './StrongFormReducer'

export default combineReducers({
    auth: AuthReducers, // auth is equal to the object returned by AuthReducers
    cardioForm: CardioFormReducer, // cardioForm is equal to the object returned by CardioFormReducer
    cardio: CardioReducer,
    strongForm: StrongFormReducer
})