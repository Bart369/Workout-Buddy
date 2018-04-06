import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
import { Page, PageSection, Input } from './common'
import { cardioUpdate } from '../actions'

class CardioForm extends Component {

    render() {    
        return (
            <Page>
                <PageSection>
                    <DatePicker
                        style={{ width: 320 }}
                        date={this.props.date}
                        mode="date"
                        placeholder="Select date"
                        format="MM-DD-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 15,
                                right: 5,
                                top: 4,
                            },
                            dateInput: {
                                marginLeft: 140,                                
                            }                            
                        }}
                        onDateChange={date => this.props.cardioUpdate({ prop: 'date', value: date })}
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Weight:'
                        placeholder='Its just a number'
                        keyboardType={'numeric'}
                        value={this.props.weight}
                        onChangeText={value => this.props.cardioUpdate({ prop: 'weight', value })}
                    />
                </PageSection>

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
                        label='Calories:'
                        placeholder='1,000,000,000'
                        keyboardType={'numeric'}
                        value={this.props.calories}
                        onChangeText={value => this.props.cardioUpdate({ prop: 'calories', value })}
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Duration:'
                        placeholder='Minutes'
                        keyboardType={'numeric'}
                        value={this.props.duration}
                        onChangeText={value => this.props.cardioUpdate({ prop: 'duration', value })}
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Distance:'
                        placeholder='Miles'
                        keyboardType={'numeric'}
                        value={this.props.distance}
                        onChangeText={value => this.props.cardioUpdate({ prop: 'distance', value })}
                    />
                </PageSection>


            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, calories, duration, distance, weight, date } = state.cardioForm

    return { name, calories, duration, distance, weight, date }
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