
import React, {Component} from 'react'
import {Box, TextInput, FormField, Form} from 'grommet'
import WorkTask from './WorkTask'

export default class Work extends Component {
    constructor (props) {
        super(props)
        this.state = {
            addTask: '',
            work: [],
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
                work: [...prevState.work, prevState.addTask],
                addTask: ''
        }))
    }

    render() {
        return (
                <Box gridArea="work" background="accent-3" >
                    <h3>Work</h3>
                    <Form onSubmit={this.onSubmit}>
                        <FormField>
                            <TextInput
                                placeholder="add task"
                                value={this.state.addTask}
                                onChange={this.onChange}
                            />
                        </FormField>
                    </Form>
                    {this.state.work.map(workItem => (
                        <WorkTask key={workItem} workItem={workItem} />
                    ))}
                </Box>
        )
    }
}

