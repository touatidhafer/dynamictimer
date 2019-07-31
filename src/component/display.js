import React, { Component } from 'react';
class Display extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <main className='main'>
                <div className='time'>
                    <span className='time-text'>Hours</span>
                    <span className='time-text'>Minutes</span>
                    <span className='time-text'>Seconds</span>
                </div>
                <div className='button'>
                    <button className='btn' onClick={this.props.startStopTime}>{this.props.btnName?'Stop':'Start'}</button>
                    <button className='btn' onClick={this.props.resetTime}>Reset</button>
                </div>
            </main>
        );
    }
   
}
export default Display;
