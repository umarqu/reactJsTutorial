import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


const title =
  "Chapter 10 - Lifting up";


function BoilingVerdict(props){
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}


class Calculator extends React.Component{
  constructor(props){
    super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

      this.state = {temperature:'',scale:'c'};
    }

    handleCelsiusChange(temperature){
      this.setState({scale:'c',temperature});
    }
    handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
    }

    render(){
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

      return(
        <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />

          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />

          <BoilingVerdict
            celsius={parseFloat(celsius)} />

          </div>
          );
    }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }

    handleChange(e){
      // before this.setState({temperature:e.target.value});
      this.props.onTemperatureChange(e.target.value);
    }

    render(){
      // before ; const temperature = this.state.temperature;
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return(
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default Calculator;


/*
We have two inputs now,
but when you enter the temperature in one of them,
the other doesn’t update.

n React, sharing state is accomplished by moving it up to the closest
common ancestor of the components that need it
this is called lifting up

local state from the TemperatureInput
and move it into the Calculator instead

If the Calculator owns the shared state,
it becomes the “source of truth”

Since the props of both TemperatureInput components are
coming from the same parent Calculator component

replace this.state.temperature with this.props.temperature

as props are readonly
temperatureInput would call this.setState() to chnage setInterval(function () {
now that the temperature is coming from the parent as props
temp input has no control over setInterval(function () {

 usually solved by making a component “controlled”
like DOM <input> accepts both a value and an onChange prop
temperatureInput accept both temperature and onTemperatureChange props from its parent Calcualtro

when the TemperatureInput wants to update its temperature,
it calls this.props.onTemperatureChange

in Calculator
We will store the current input’s temperature and scale
in local state
This is the state we “lifted up” from the inputs,
and it will serve as the “source of truth” for both of them

*/
