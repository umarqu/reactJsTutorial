import React from 'react';
import '../App.css';

const title =
  "Chapter 4 - Components and props";

function Welcome(props){
  return <h3>Hello , {props.name}</h3>;
}

function App(props) {
  return (
    <div>
    <h1>{title}</h1>
    <h2>Hello, {props.name}</h2>

    <Welcome name="Sara" />
    <Welcome name="Brian" />
    <Welcome name="Sid" />
    </div>
  );
}

export default App;


/*
components are like functions
components take props --- return --- React Elements

defining component -- via js function
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

rendering a component
const element = <div />

also can define user defined Components
const element = <welcome name="sara" />

when react sees this, passes JSX attributes to component as objects
called Props
like the above example


components can refer to other Components
this is put in a div tag

the above example output a welcome message multiple times with Props



extracting Components
you can split components into smaller Components

look at
https://reactjs.org/docs/components-and-props.html
the ecamples shows how you can split up a nested component into multiple
in the main component it becomes one line of code


props are read only
dont cahnge incoming props
function sum(a, b) {
  return a + b;
}
this is pure as it desnt change a or b
All React components must act like pure functions with respect to their props.



*/
