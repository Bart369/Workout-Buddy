import { combineReducers } from 'redux'
import AuthReducers from './AuthReducer'
import CardioFormReducer from './CardioFormReducer';

export default combineReducers({
    auth: AuthReducers, // auth is equal to the object returned by AuthReducers
    cardioForm: CardioFormReducer // cardioForm is equal to the object returned by CardioFormReducer
})