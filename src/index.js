import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './2_jsx/jsx.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
