import React, { Component } from 'react';
import { inactive, active } from '../assets/styles'

class Pad extends Component{
  constructor(props){
    super(props);
    this.state = {
      style: inactive
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (this.props.keyCode === e.keyCode) {
      this.playSound();
    }
  }

  switchStyle = () => {
    this.state.style.color === '#dddddd' ?
      this.setState({
        style: active
      }) :
      this.setState({
        style: inactive
      })
  }

  playSound = () => {
    const sound = document.getElementById(this.props.keyTrigger)
    sound.currentTime = 0;
    sound.play();
    this.props.display(this.props.id.replace(/-/g, ' '));
    this.switchStyle();
    setTimeout(() => this.switchStyle(), 150);
  }
  render(){
    return(
      <div
        className='drum-pad'
        id={this.props.id}
        style={this.state.style}
        onClick={this.playSound}>
        <audio src={this.props.url}
          className='clip'
          id={this.props.keyTrigger}
          ref={ref => this.audio = ref}></audio>
        <p>{this.props.keyTrigger}</p>
      </div>
    )
  }
}

export default Pad;
