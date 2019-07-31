import React,{Component} from 'react';
import './App.css';
import Timer from './component/timer';
import Display from './component/display';
class App extends Component {
  constructor(props) {
    super(props)
  this.state={
    seconds: 0,
    minutes: 0,
    hours: 0,
    btnName:false
  }
}
interval = {}
Timer = () =>{
  this.interval=setInterval(()=> {
    if (this.state.btnName){
      if (this.state.seconds === 59){
        this.setState({
    seconds: 0,
    minutes: this.state.minutes + 1

       })
      }else {
        this.setState({
          seconds: this.state.seconds + 1
        })
      }
      if (this.state.minutes==59){
        this.setState({
          minutes: 0,
          hours: this.state.hours + 1
        })
      }
    }
  },1000)
}
stopTime = () => {

  this.setState({
    btnName: !this.state.btnName ,
  })
  clearInterval(this.interval) 
}
startStopTime = () => {
  this.stopTime()
  this.Timer()
}
resetTime = () => {
  this.setState({
    minutes: 0,
    hours: 0,
    seconds: 0
  })
}
  render() { 
    return (
      <div>
      <Timer
       hours={this.state.hours}
       minutes={this.state.minutes}
       seconds={this.state.seconds}
       />
      
        <Display
        resetTime={this.resetTime}
        startStopTime={this.startStopTime}
        btnName={this.state.btnName}
        />
        
      </div>
      
      );
     
  }
}
 
export default App;