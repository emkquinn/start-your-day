import React, {Component} from 'react'
import {Grid, Box, TextInput, FormField, Form, CheckBox, Meter} from 'grommet'
import Work from './Work'
import Personal from './Personal'

export default class Main extends Component {

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
                <Work />
                <Box gridArea="main" background="accent-4" >
                    <h3>Main</h3>
                    <Meter
                        type="circle"
                        values={[{
                            value: 60,
                            label: 'sixty',
                        }]}
                        aria-label="meter"
                        />
                </Box>
                <Personal />
            </Grid>
        )
    }
}

