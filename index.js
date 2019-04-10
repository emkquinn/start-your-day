import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'
import {Grommet} from 'grommet'

const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '14px',
        height: '20px',
      },
    },
  };


ReactDOM.render(
    <Grommet theme={theme}>
        <Main />
    </Grommet>,
    document.getElementById('app') // make sure this is the same as the id of the div in your index.html
    );
