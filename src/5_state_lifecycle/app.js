import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const title =
  "Chapter 5 - state and lifecycle";

function App() {
  return (
    <div>
    <h1>{title}</h1>
    </div>
  );
}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),  // see this being used
            100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>{title}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}

export default Clock;


/*

state and lifecycle in a react component

one way to update UI , call ReactDOM.render() to change rendering
we can futher make the clock reusable and encapsulated

State is similar to props, but it is private and fully controlled by the component.

we convert previous Clock function to class
1. extends ReactComponent
2. render method --- think of a prototype
3. move body of function into render()
4. replace props with this.props in rendering
5. delete functional call


render will be called everytime update happens
we can add local State to class
replace this.props.date with this.state.date in the render()
--add a constructor

from what it seems its a class like in Java
constructor inialis the class variables or states
render() is like a listenr runs when there is an update


Adding Lifecycle Methods to a Class
  setter and getter methods but they are specific to react
We want to set up a timer whenever the Clock is rendered to the DOM for the first time.
This is called “mounting” in React.

we want to also unmount the timer when we DOM produces by Clock
this is called unmounting in react


componentDidMount() - runs after component outpit has been rendered to dom
                      good place to put the timer

this.setState() used to schedule updates to component local states
tick method uses This
ticks every second


read through the recap of the chapter
and try and understand the steps occuring when a component is rendered
simple explanation
ReactDOM.render is called , initalises the constructor, this.state
then react calls the render() it updates the dom
clockoutput is inserted and react calls componentDidMount(), sets up tick once a second
every second tick is called , UI updaets calling setState()
when setState is called , render is called. and then componentDidMount()
repeat




About the state
dont modify it directly
use this.setState({comment:"hello"}) not this.state.comment="Hello"
you can only assign this.state in the constructor.


State Updates May Be Asynchronous
React may batch multiple setState()
Because this.props and this.state may be updated asynchronously
dont rely on their seperate values for calc next thing


this.setState({
  counter: this.state.counter + this.props.increment,
});
this is wrong

To fix it, use a second form of setState() that accepts a function rather than an object.
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

if you have serveral variables in state
you can update them seperatly with different setState and it will merge


*/
