import React, { Component } from 'react'
import StrongList from './StrongList'
import CardioList from './CardioList'
import { Page, PageSection, Button } from './common'

class ViewLogs extends Component {

    state = {
        showCardio: true
    }

    viewCardio() {
        this.setState({
            showCardio: true
        })
    }

    viewStrong() {
        this.setState({
            showCardio: false
        })
    }

    renderCardio() {
        return (
            <CardioList />
        )
    }

    renderStrong() {
        return (
            <StrongList />
        )
    }

    render() {
        return (
            <Page>
                <PageSection>
                    <Button onPress={this.viewCardio.bind(this)}>
                        View Cardio Logs
                    </Button>
                </PageSection>

                <PageSection>
                    <Button onPress={this.viewStrong.bind(this)}>
                        View Strenght Training Logs
                    </Button>
                </PageSection>

                { this.state.showCardio ? this.renderCardio() : this.renderStrong() }
            </Page>
        )
    }
}

export default ViewLogs