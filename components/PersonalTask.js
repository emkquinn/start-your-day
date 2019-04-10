import React, {Component} from 'react'
import {CheckBox} from 'grommet'

export default class PersonalTask extends Component {
    constructor (props) {
        super(props)
        this.state = {
            checked: false
        }
        this.onCheck = this.onCheck.bind(this)
    }

    onCheck(){
        this.setState((prevState) => ({
            checked: !prevState.checked
        }))
    }

    render() {
        return (
            <CheckBox
                key={this.props.personalItem}
                checked={this.state.checked}
                label={this.props.personalItem}
                onChange={this.onCheck}
            />
        )
    }
}