import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import Welcome from './components/Welcome'
import LoginForm from './components/LoginForm'
import TrackOrLog from './components/TrackOrLog'

class RouterComponent extends Component {

    componentWillMount() {
        setTimeout(() => {
            Actions.auth()
        }, 3000);
    }

   
    render() {
        return (
            <Router>
                <Scene key='root'hideNavBar>
    
                    <Scene key='welcome'>
                        <Scene key='welcome' component={Welcome}  initial />
                    </Scene>
    
                    <Scene key='auth'>
                        <Scene key='login' component={LoginForm} title='Please Login' />
                    </Scene>

                    <Scene key='main'>
                        <Scene
                            key='trackOrLog'
                            component={TrackOrLog}
                            title='What do you want to do?'
                            onLeft={() => logOutUser()}
                            leftTitle='Log Out' 
                            initial
                        />








                    </Scene>


                </Scene>
            </Router>
    
        )

    }
}

export default RouterComponent