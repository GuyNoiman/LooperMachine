import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class Button extends Component {

    state = {
        id: this.props.id,
        soundName: this.props.soundName,
        audio: this.props.audio,
        isOn: false,
        loopNumber: this.props.loopNumber,
    };

    update = () => {
        // this.props.buttonSwitched(!this.state.isOn);
        this.setState({ isOn: !(this.state.isOn)}, () => this.props.buttonSwitched(this.state.isOn) );    
    }

    componentDidUpdate(prevProps) {
        if (prevProps.loopNumber !== this.props.loopNumber) {
            this.state.isOn ? this.state.audio.play() : this.state.audio.pause();
            this.setState({prevLoopNumber: this.props.loopNumber});
        }
    }

    playAudio() {
        this.state.isOn ? this.state.audio.play() : this.state.audio.pause();
    }
    
    render () {
        return (
            <div style={{margin:"2%", position:"relative"}}>
                <FormControlLabel
                    control={<Switch checked={this.state.isOn} onChange={this.update} name="id0" color="primary" />}
                    label= {this.state.soundName}
                    labelPlacement= 'top'
                />   
            </div>
        );
    } 
}