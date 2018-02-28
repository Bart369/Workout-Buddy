import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page, PageSection, Input } from './common'

class CardioForm extends Component {
    render() {
        return (
            <Page>
                <PageSection>
                    <Input
                        label='Name of workout:'
                        placeholder='Insanity: Pure Cardio!'
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Calories Burned:'
                        placeholder='1,000,000,000'
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Duration:'
                        placeholder='60 minutes'
                    />
                </PageSection>
            </Page>
        )
    }
}

export default CardioForm