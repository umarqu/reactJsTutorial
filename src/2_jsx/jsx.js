import React from 'react';
import '../App.css';

const name = 'umar qureshi';

function formatName(user){
  return user.firstName+ ' ' + user.lastName;
}

const username = {
  firstName:'harper',
  lastName:'Perez'
};

function getGreeting(user){
  if(user){
    return <h1> Hello, {formatName(username)}</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function App(){
  return (
    getGreeting(username)
  );
}

export default App;
