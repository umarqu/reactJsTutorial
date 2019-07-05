import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './2_jsx/jsx.js'
//import App from './4_components_props/app.js'
//import App from './5_state_lifecycle/app.js'
//import App from './6_Handling_Events/app.js'
//import App from './8_Lists_Keys/app.js'
//import App from './9_forms/app.js'
import App from './10_lifting_State_Up/app.js'


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
ReactDOM.render(<App />, document.getElementById('root'));
*/

//8.list and Keys
const numbers = [2412,4,124,124]
//ReactDOM.render(<App numbers={numbers}/>, document.getElementById('root'));

//9.forms
//ReactDOM.render(<App />, document.getElementById('root'));


//10-.forms
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
