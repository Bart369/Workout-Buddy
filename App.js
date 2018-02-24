import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'

export default class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAjb_VRx06jsnDVyNrcIKqsnSL6EsyTN1Y",
      authDomain: "workout-buddy-31b6c.firebaseapp.com",
      databaseURL: "https://workout-buddy-31b6c.firebaseio.com",
      projectId: "workout-buddy-31b6c",
      storageBucket: "workout-buddy-31b6c.appspot.com",
      messagingSenderId: "722133233706"
    }
    firebase.initializeApp(config)
  }

  render() {
    store = createStore()

    return (
      <Provider store={store}>

        <LoginForm/>
      
      </Provider>
    );
  }
}


