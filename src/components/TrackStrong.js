import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Page, PageSection, Button } from './common'
import StrongForm from './StrongForm'
import { saveStrong } from '../actions'

class TrackStrong extends Component {

    onButtonPress() {
        const { move, weights, reps, weight, date } = this.props

        this.props.saveStrong({ move, weights, reps, weight, date })
    }


    render() {
        return (
            <Page>
                <StrongForm showDate />
                <StrongForm formNum={'2'}/>
                <StrongForm formNum={'3'}/>
                <StrongForm formNum={'4'}/>
                <StrongForm formNum={'5'}/>

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
    const { move, weights, reps, weight, date } = state.strongForm

    return { move, weights, reps, weight, date }

}

export default connect (mapStateToProps, { saveStrong }) (TrackStrong)