import React, { Component } from 'react';
import Button from './Button';

import Bass_Warwick from './sounds/Bass_Warwick.mp3';
import Stutter_breakbeats from './sounds/Stutter_breakbeats.mp3';
import Electric_guitar from './sounds/Electric_guitar.mp3';
import Future_funkBeats from './sounds/Future_funkBeats.mp3';
import Groove from './sounds/Groove.mp3';
import MazePolitics from './sounds/MazePolitics.mp3';
import Pas_Groove from './sounds/Pas_Groove.mp3';
import SilentStar from './sounds/SilentStar.mp3';
import StompySlosh from './sounds/StompySlosh.mp3';



export default class Manager extends Component {

    state = {
        loopNumber: 0,
        numOfSounds: 0,
        interval: {},
        isPlaying: false,
    };

    parameters = [
        {id: "id1", soundName: 'Bass_Warwick', isPlaying: false, audio: new Audio(Bass_Warwick)},
        {id: "id2", soundName: 'Stutter_breakbeats', isPlaying: false, audio: new Audio(Stutter_breakbeats)},
        {id: "id3", soundName: 'Electric_guitar', isPlaying: false, audio: new Audio(Electric_guitar)},
        {id: "id4", soundName: 'Future_funkBeats', isPlaying: false, audio: new Audio(Future_funkBeats)},
        {id: "id5", soundName: 'Groove', isPlaying: false, audio: new Audio(Groove)},
        {id: "id6", soundName: 'MazePolitics', isPlaying: false, audio: new Audio(MazePolitics)},
        {id: "id7", soundName: 'Pas_Groove', isPlaying: false, audio: new Audio(Pas_Groove)},
        {id: "id8", soundName: 'SilentStar', isPlaying: false, audio: new Audio(SilentStar)},
        {id: "id9", soundName: 'StompySlosh', isPlaying: false, audio: new Audio(StompySlosh)}
    ];
         
    buttonSwitched = (bool) => {
        bool ? 
        this.setState({ numOfSounds: this.state.numOfSounds + 1}, () => this.startPlaying()) : 
        this.setState({ numOfSounds: this.state.numOfSounds - 1}, () => this.startPlaying());
    }

    bla(props, state) {
        console.log("Im in componentDidMount");
        
        if (this.state.numOfSounds > 0 && !this.state.isPlaying) {
            this.setState({ loopNumber: this.state.loopNumber + 1, isPlaying: true },
                 () => this.interval = setInterval(() => this.setState({isPlaying : false}), 8000) );
        }
        else if (this.state.numOfSounds === 0) this.setState({ isPlaying: false });
        else return;
    }


    startPlaying = () => {
        if (this.state.numOfSounds > 0 && !this.state.isPlaying) {
            this.setState({ loopNumber: this.state.loopNumber + 1, isPlaying: true },
            setTimeout(callback, 8000));
        }
        else if (this.state.numOfSounds === 0) this.setState({ isPlaying: false });
    }

   


    renderButtons = () => {
        return this.parameters.map(button => {
          return <Button id={button.id} soundName={button.soundName} audio={button.audio} loopNumber={this.state.loopNumber} buttonSwitched={this.buttonSwitched} key={button.id}/>
        });
    }
    
    render () {
        return (
            <div>  
                {this.renderButtons()}
            </div>
        );
    } 
}