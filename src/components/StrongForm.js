import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
import { Page, PageSection, Input } from './common'
import { strongUpdate } from '../actions'

class StrongForm extends Component {

    render() {
        return (
            <Page>
                {this.props.showDate ? 

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

                    : null }

                <PageSection>
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

                <PageSection>
                    <Input
                        label='Weight:'
                        placeholder='Body weight in pounds'
                        keyboardType={'numeric'}
                        weightNum={'weight' + this.props.formNum}
                        value={this.props.weightNum}
                        onChangeText={value => this.props.strongUpdate({ prop: 'weight' + this.props.formNum, value })}
                    />
                </PageSection>



            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    const { move, weights, reps, weight, date, move2, weights2, reps2, weight2, move3, weights3, reps3, weight4, move5, weights5, reps5, weight5,
             } = state.strongForm

    return { move, weights, reps, weight, date, move2, weights2, reps2, weight2, move3, weights3, reps3, weight4, move5, weights5, reps5, weight5 }
}

export default connect(mapStateToProps, { strongUpdate }) (StrongForm)