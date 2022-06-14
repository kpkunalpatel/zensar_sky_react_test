import React, { Component } from "react";

export default class Clock extends Component {
  constructor (props) {
        super(props);
        this.state = { dateClass: new Date() }
        this.time = this.state.dateClass.toLocaleTimeString();
        this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
    }

    setTime = () => {
        this.setState({ dateClass: new Date() })
        this.time = this.state.dateClass.toLocaleTimeString();
        this.hourMin = this.time.length === 10? this.time.slice(0) : this.time.slice(0,5);
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render () {
        return (
            <div style={{color: "black", fontSize: 100, textAlign: 'center'}}>{this.hourMin}</div>
        )
    }
}