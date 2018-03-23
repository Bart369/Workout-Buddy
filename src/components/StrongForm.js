import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
import { Page, PageSection, Input } from './common'
import { strongUpdate } from '../actions'

class StrongForm extends Component {

    render() {
        return (
            <Page>

                {/* prop passed from the Trackstrong, only the first form will pass so we only have one date input  */}
                {this.props.showDate ? 
                    <View>
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
                                    // ... You can check the source to find the other keys. 
                                }}
                                onDateChange={date => this.props.strongUpdate({ prop: 'date', value: date })}
                            />
                        </PageSection>

                        <PageSection>
                            <Input
                                label='Weight:'
                                placeholder='Body weight in pounds'
                                keyboardType={'numeric'}
                                value={this.props.weight}
                                onChangeText={value => this.props.strongUpdate({ prop: 'weight', value })}
                            />
                        </PageSection>
                    </View>

                    : null }

                <PageSection>
                    {/* moveNum below is so i can get the name of the prop for each input. I cant set value to this.props.move because
                    thats just grabbing the value of the first move input. For the second input i need the value of this.props.move2.
                    To make this reusable, moveNum gives me move2 or the correct name for each input and I can get the correct value 
                    using this.props.moveNum */}
                    <Input
                        label='Move:'
                        placeholder='Curls'
                        moveNum={'move' + this.props.formNum} 
                        value={this.props.moveNum}
                        onChangeText={value => this.props.strongUpdate({ prop: 'move' + this.props.formNum, value })}
                    />
                </PageSection>

                <PageSection>
                    <Input
                        label='Weights:'
                        placeholder='pounds'
                        keyboardType={'numeric'}
                        weightsNum={'weights' + this.props.formNum}
                        value={this.props.weightsNum}
                        onChangeText={value => this.props.strongUpdate({ prop: 'weights' + this.props.formNum, value })}
                    />
                </PageSection>
                
                <PageSection>
                    <Input
                        label='Reps:'
                        placeholder='Repetitions'
                        keyboardType={'numeric'}
                        repsNum={'reps' + this.props.formNum}
                        value={this.props.repsNum}
                        onChangeText={value => this.props.strongUpdate({ prop: 'reps' + this.props.formNum, value })}
                    />
                </PageSection>





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

    return {
            move, weights, reps, weight, date,
            move2, weights2, reps2,
            move3, weights3, reps3,
            move4, weights4, reps4,
            move5, weights5, reps5,
            }
}

export default connect(mapStateToProps, { strongUpdate }) (StrongForm)