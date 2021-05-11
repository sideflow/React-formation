import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnimatedButton.css';


class AnimatedButton extends Component {
    #privateData='value private'
    constructor(props) {
        super(props);
        this.state = {clicked: false}
    }

    render() {
        return (
            <>
                <div className={"AnimatedButton"+(this.state.clicked? " clicked":"")} style={this.props.style} 
                    onClick={(evt) => {
                        // gestion interne pour le click
                        this.setState({clicked: true});
                        setTimeout(()=>{this.setState({clicked: false})}, 1000);
                        // execution de l'action fournit par le parent
                        this.props.action();
                    }}>
                    {this.props.title}
                </div>

                {JSON.stringify(this.state)}
            </>
        );
    }
}

AnimatedButton.propTypes= {
    title:PropTypes.string.isRequired,
    stype:PropTypes.object
}

export default AnimatedButton;