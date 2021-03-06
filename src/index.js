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
//import App from './10_lifting_State_Up/app.js'
import ProductTable from './ThinkingReact/ProductTable.js'


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
//ReactDOM.render(<App />, document.getElementById('root'));


//thinking react
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <ProductTable products={PRODUCTS} />,
  document.getElementById('container')
);


serviceWorker.unregister();
