import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import LoginForm from './src/components/LoginForm'

export default class App extends React.Component {
  render() {
    return (
      <View >
        <LoginForm/>
      </View>
    );
  }
}


