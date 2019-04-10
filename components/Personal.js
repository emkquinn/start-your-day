
import React, {Component} from 'react'
import {Box, TextInput, FormField, Form} from 'grommet'
import PersonalTask from './PersonalTask'

export default class Personal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            addTask: '',
            personal: [],
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        this.setState({
            addTask: event.target.value
        })
    }

    onSubmit(){
        this.setState((prevState) => ({
                personal: [...prevState.personal, prevState.addTask],
                addTask: ''
        }))
    }

    render() {
        return (
            <Box gridArea="personal" background="accent-2" >
            <h3>Personal</h3>
            <Form onSubmit={this.onSubmit}>
                <FormField>
                    <TextInput
                        placeholder="add task"
                        value={this.state.addTask}
                        onChange={this.onChange}
                    />
                </FormField>
            </Form>
            {this.state.personal.map(personalItem => (
                <PersonalTask key={personalItem} personalItem={personalItem} />
            ))}
            </Box>
        )
    }
}

