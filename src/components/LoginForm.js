import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Page, PageSection, Input, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }


    render() {
        return (
            <Page>

                <PageSection>                    
                    <Input 
                        label='Email'
                        placeholder='email@blahblah.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}           
                    />                    
                </PageSection>

                <PageSection>
                    <Input
                        label='Password'
                        placeholder='Anything but 123456789'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </PageSection>

                <PageSection>
                    <Button>
                        Login/Register
                    </Button>
                </PageSection>



            </Page>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password } = auth

    return {email , password}
}

export default connect(mapStateToProps, { emailChanged, passwordChanged }) (LoginForm)