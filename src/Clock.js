import React, { Component } from 'react';

class Clock extends Component {

    constructor(props)
    {
        super(props);
        this.state = {date: new Date()};
    }

    // the method componentDidMount runs after the component output has been rendered to the DOM
    componentDidMount()
    {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // the method componentWillUnmount runs after the component output has been removed from the DOM
    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }

    tick()
    {
        this.setState({date: new Date()});
    }

    render()
    {
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;