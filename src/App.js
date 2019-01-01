import React, { Component } from 'react';
import Pad from './components/Pad'
import SoundBank from './assets/soundBank';
import './App.css';

class Drumpad extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: ''
    };
  }

  handleDisplay = display => this.setState({ display })

  render(){
    return(
      <div
        id="drum-machine">
        <div
          id="display">
          {this.state.display}
        </div>
        <div className="container">
          {SoundBank.map(data =>
            <Pad
              id={data.id}
              keyCode={data.keyCode}
              keyTrigger={data.keyTrigger}
              url={data.url}
              display={this.handleDisplay}/>)}
        </div>
      </div>
    )
  }
};

export default Drumpad;
