import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Page, PageSection, Input } from './common'
import { strongUpdate } from '.actions'

class StrongForm extends Component {

    render() {
        return (
            <Page>
                <PageSection>
                    <Input
                        label='Move:'
                        placeholder='Curls'
                        value={this.props.move}
                        onChangeText={value => this.props.strongUpdate({ prop: 'move', value })}
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Weights:'
                        placeholder='pounds'
                        keyboardType={'numeric'}
                        value={this.props.weights}
                        onChangeText={value => this.props.strongUpdate({ prop: 'weights', value })}
                    />
                </PageSection>
                
                <PageSection>
                    <Input
                        label='Reps:'
                        placeholder='Repetitions'
                        keyboardType={'numeric'}
                        value={this.props.reps}
                        onChangeText={value => this.props.strongUpdate({ prop: 'reps', value })}
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Weight:'
                        placeholder='Your body weight'
                        keyboardType={'numeric'}
                        value={this.props.weights}
                        onChangeText={value => this.props.strongUpdate({ prop: 'weight', value })}
                    />
                </PageSection>


                <PageSection>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.props.date}
                        mode="date"
                        placeholder="Select date"
                        format="MM-DD-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys. 
                        }}
                        onDateChange={date => this.props.strongUpdate({ prop: 'date', value: date })}
                    />
                </PageSection>
            </Page>
        )
    }
}

const mapStateToProps

export default StrongForm