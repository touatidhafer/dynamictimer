import React, { Component } from 'react';
class Timer extends Component {
  constructor(props){
    super(props)
      }
  render() { 
       return (
         <div className='main'>
           <div className='timer'>
             {this.props.hours < 10 ? '0' + this.props.hours : this.props.hours}:{this.props.minutes < 10 ? '0' + this.props.minutes : this.props.minutes}:{this.props.seconds < 10 ? '0' + this.props.seconds : this.props.seconds}     
           </div> 
           </div>   
   ) ;
  }
}

export default Timer;