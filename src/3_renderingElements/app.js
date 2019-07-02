import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const title =
  <h1> Chapter 3 -  Rendering-Elements </h1> ;

function tick() {
    const element = (
      <div>
        <h1> Chapter 3 -  Rendering-Elements </h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('clock'));

  }

  setInterval(tick, 1000);

//export default App;

// DOM elements
// React elements are plain objects, and are cheap to create
//React DOM takes care of updating the DOM to match the React elements.

// you render an element into the dom
// use ReactDOM.render()

//React elements are immutable. Once you create an element, you can’t change its children or attributes
// element represents single frame,represents the UI at a certain point
// so far we can only update the DOM like this (reactDOM.render())

// call the update on the setInterval() callback
