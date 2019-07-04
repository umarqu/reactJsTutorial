import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const title =
  "Chapter 6 - handling Events";

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};

  // this binding is needed to make this work in the callback
  this.handleClick = this.handleClick.bind(this);
}

handleClick(){
  this.setState(state =>({
    isToggleOn:!state.isToggleOn
  }));
}

render(){
  return(
    <div>
      <h1>{title}</h1>
      <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'On':'Off'}
      </button>
    </div>
  );
}
}

export default Toggle;


/*
Handling events with React elements is very similar to handling events on DOM elements
some syntax differences

1-React events are named using camelCase
2-JSX you pass a function as the event handler not string

<button onClick={activateLasers}>
  Activate Lasers
</button>



react event
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

e is a synthetic event
In react you dont need to call addEventListener to add listeners to a DOM element after it is created
provide a listener when the element is initially rendered.

define a component using an ES6 class, a common pattern is for an event handler to be a method on the class
Toggle component renders a button that lets the user toggle between “ON” and “OFF” states
above example


On binding this
careful about the meaning of this in JSX callbacks.
In JavaScript, class methods are not bound by default.
If you forget to bind this.handleClick and pass it to onClick


key point
if you refer to a method without () after it,
such as onClick={this.handleClick},
you should bind that method.

recommend binding in the constructor or using the class fields syntax,
to avoid this sort of performance problem


Passing Arguments to Event Handlers
common to want to pass an extra parameter to an event handler.
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
*/
