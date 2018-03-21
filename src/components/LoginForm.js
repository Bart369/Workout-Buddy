import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Page, PageSection, Input, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props
        // console.log({ email, password })
        this.props.loginUser({ email, password })
    }

    renderError() {
        if (this.props.error) {
            return (
                <View >
                    <Text style={styles.errorStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) {
            return  <Spinner size='large' />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login/Register
            </Button>
        )
    }

    render() {
        return (
            
            <Page>

                <PageSection>                    
                    <Input 
                        label='Email:'
                        placeholder='email@blahblah.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}           
                    />                    
                </PageSection>

                <PageSection>
                    <Input
                        label='Password:'
                        placeholder='Be creative :)'
                        // autoCapitalize='none'
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </PageSection>

                {this.renderError()}

                <PageSection>
                    {this.renderButton()}
                </PageSection>

            </Page>
        )
    }
}

const styles = {
    errorStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 20
    }
}


const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth

    return {email , password, error, loading}
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser }) (LoginForm)