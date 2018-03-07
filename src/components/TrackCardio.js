import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import CardioForm from './CardioForm'
import { Page, PageSection, Button } from './common'
import { saveCardio } from '../actions'

class TrackCardio extends Component {
    
    onButtonPress() {
        const { name, calories, duration, distance, date } = this.props

        this.props.saveCardio({ name, calories, duration, distance, date })
    }


    render() {
        return(
            <Page>
                <CardioForm />

                <PageSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Workout
                    </Button>
                </PageSection>
            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, calories, duration, distance, date } = state.cardioForm

    return  { name, calories, duration, distance, date }
}

export default connect( mapStateToProps, { saveCardio }) (TrackCardio)