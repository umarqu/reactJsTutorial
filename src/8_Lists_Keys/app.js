import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


const title =
  "Chapter 8 - Lists and Keys";

const list = [1,2,3,4,5];
const listItems = list.map((number) =>
  <li>{number}</li>
);

function App(){
  return (
    <div>
      <h1>{title}</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

function NumberList(props){
  const numbers = props.numbers;
  const listItem = numbers.map((number)=>
    <li>{number}</li>
  );

  return(
    <ul>{listItem}</ul>
  )
}


export default NumberList;
