import React, { Component } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native' /* KeyboardAvoidingView is what lets the user move the keyboard */ 
import { connect } from 'react-redux'
import { Page, PageSection, Button } from './common'
import StrongForm from './StrongForm'
import { saveStrong } from '../actions'

class TrackStrong extends Component {

    onButtonPress() {
        const { move, weights, reps, weight, date,
                move2, weights2, reps2,
                move3, weights3, reps3,
                move4, weights4, reps4,
                move5, weights5, reps5, 
              } = this.props

        this.props.saveStrong({
                    move, weights, reps, weight, date,
                    move2, weights2, reps2,
                    move3, weights3, reps3,
                    move4, weights4, reps4,
                    move5, weights5, reps5, 
                })
    }

    render() {
        return (
            <Page>
                <ScrollView>
                    <KeyboardAvoidingView behavior="padding">  
                        <StrongForm showDate formNum={''}/>
                        <StrongForm formNum={'2'}/>
                        <StrongForm formNum={'3'}/>
                        <StrongForm formNum={'4'}/>
                        <StrongForm formNum={'5'}/>
                    
                        <PageSection>
                            <Button onPress={this.onButtonPress.bind(this)}>
                                Save Workout
                            </Button>
                        </PageSection>
                    </KeyboardAvoidingView >
                </ScrollView>
            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    const { move, weights, reps, weight, date,
            move2, weights2, reps2,
            move3, weights3, reps3,
            move4, weights4, reps4,
            move5, weights5, reps5,
            } = state.strongForm

    return { move, weights, reps, weight, date,
            move2, weights2, reps2,
            move3, weights3, reps3,
            move4, weights4, reps4,
            move5, weights5, reps5, }

}

export default connect (mapStateToProps, { saveStrong }) (TrackStrong)