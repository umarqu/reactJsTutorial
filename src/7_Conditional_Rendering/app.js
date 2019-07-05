import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const title =
  "Chapter 7 - Conditional Rendering";


/*
you can create distinct components that encapsulate behavior you need.
Then, you can render only some of them, depending on the state of your application

Use JavaScript operators like if or the conditional operator
to create elements representing the current state,
and let React update the UI to match them.

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />; // UserGreeting is a component
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);


create a stateful component called LoginControl.
then have a class called LoginControl
components


Inline If with Logical && Operator
You may embed any expressions in JSX by wrapping them in curly braces

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);


or you can use the inline if-Else with conditional operation
condition ? true : false

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}





Preventing Component from Rendering

when do you want to do this
you might want to hide itself even though it was rendered
by another components
to do this return null instead of its output
Preventing Component from Rendering


*/
