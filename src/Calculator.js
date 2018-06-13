import React from 'react';
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const value = parseFloat(temperature);
    return !Number.isNaN(value) ? Math.round(convert(value) * 1000) / 1000 : '';
}

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: ''};
    }

    handleCelsiusChange(temperature)
    {
        this.setState({temperature: temperature, scale: 'c'});
    }

    handleFahrenheitChange(temperature) {
        this.setState({temperature: temperature, scale: 'f'});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c"
                                  temperature={celsius}
                                  onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput scale="f"
                                  temperature={fahrenheit}
                                  onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsius={celsius}/>
            </div>
        );
    }
}

export default Calculator;
