import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Page, PageSection, Input, Button } from './common'

class LoginForm extends Component {
    render() {
        return (
            <Page>

                <PageSection>                    
                    <Input 
                        label='Email'
                        placeholder='email@blahblah.com'           
                    />                    
                </PageSection>

                <PageSection>
                    <Input
                        label='Password'
                        placeholder='Anything but 123456789'
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

export default LoginForm