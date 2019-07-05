import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


const title =
  "Chapter 9 - forms";

const simpleForm =
  <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
    <input type="submit" value="Submit" />
  </form>

function App(){
  return(
    <div>
      <h1>{title}</h1>
      {simpleForm}
    </div>
  )
}


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


class EssayForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


export default EssayForm;

/*
form elements work a little bit differently from other DOM elements in React,
because form elements naturally keep some internal state


from the above code in form
JavaScript function that handles the submission of the form and has access to the data that the user entered into the form
TO achieve this is with a technique called “controlled components"

elements such as <input>, <textarea> maintain their own state
in react mutable state is typically kept in the state property of components,
and only updated with setState()

when the above form is submitted, we can write the form as a controlled component:

-
Since the value attribute is set on our form element, the displayed value will always be this.state.value

to enforce that names are written with all uppercase letters, we could write handleChange as
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}


textinput is the same

*/
