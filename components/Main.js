import React, {Component} from 'react'
import {Grid, Box, TextInput, FormField, Form, CheckBox} from 'grommet'

export default class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            addTask: '',
            work: [],
            personal: [],
            checked: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onCheck = this.onCheck.bind(this)
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

    onCheck(){
        this.setState((prevState) => ({
            checked: !prevState.checked
        }))
    }

    render() {
        return (
            <Grid
                rows={['large']}
                fill={true}
                columns={['1/3']}
                gap="small"
                areas={[
                { name: 'work', start: [0, 0], end: [0, 0] },
                { name: 'main', start: [1, 0], end: [1, 0] },
                { name: 'personal', start: [2, 0], end: [2, 0] }
                ]}
            >
                <Box gridArea="work" background="accent-3" >
                    <h3>Work</h3>
                    {this.state.work.map(workItem => (
                        <CheckBox
                            key={workItem}
                            checked={this.state.checked}
                            label={workItem}
                            onChange={this.onCheck}
                      />
                    ))}
                </Box>
                <Box gridArea="main" background="accent-4" >
                    <h3>Main</h3>
                    <Form onSubmit={this.onSubmit}>
                        <FormField>
                            <TextInput
                                placeholder="add task"
                                value={this.state.addTask}
                                onChange={this.onChange}
                            />
                        </FormField>
                    </Form>
                </Box>
                <Box gridArea="personal" background="accent-2" >
                    <h3>Personal</h3>
                </Box>
            </Grid>
        )
    }
}

