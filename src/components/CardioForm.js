import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page, PageSection, Input } from './common'
import { cardioUpdate } from '../actions'

class CardioForm extends Component {
    render() {
        return (
            <Page>
                <PageSection>
                    <Input
                        label='Name of workout:'
                        placeholder='Insanity: Pure Cardio!'
                        value={this.props.name}
                        onChangeText={value => this.props.cardioUpdate({ prop: 'name', value })}
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

const mapStateToProps = (state) => {
    const { name, calories, duration, distance, date } = state.cardioForm

    return { name, calories, duration, distance, date }
}

export default connect( mapStateToProps, { cardioUpdate }) (CardioForm)

// connect takes in mapStateToProps and our action creator cardioUpdate and connects it to our class component CardioForm.
// mapStateToProps is taking the state object from our index reducer and returning the value of the state object properties.
// conenct is passing the values of those state properties and our action creator as props to our class component.


// how the name input works: we set the value of the input equal to our name prop which starts off as an empty string.
// as the user types, onChangeText runs our action creator cardioUpdate which was also passed as a prop.
// cardioUpdate takes two arguments, first is a property of prop with the value of 'name' and a property of value with
// with the value of the value arugment which is equal to props.name. Our action reducer passes those values to the
// reducer, our reducer udpates the name property of our state object and which our mapStateToProps then passes back to our component.