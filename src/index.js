import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './2_jsx/jsx.js'
//import App from './4_components_props/app.js'
//import App from './5_state_lifecycle/app.js'
import App from './6_Handling_Events/app.js'

import * as serviceWorker from './serviceWorker';
/*
4_components_props
ReactDOM.render(<App name="umar"/>, document.getElementById('root'));
*/

/*
5_state_lifecycle
ReactDOM.render(<App />, document.getElementById('root'));
*/

/*
6_Handling_Events
*/
ReactDOM.render(<App />, document.getElementById('root'));




serviceWorker.unregister();
