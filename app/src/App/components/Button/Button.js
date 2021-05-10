import React from "react";
import './Button.css'
import PropTypes from 'prop-types';

function Button(props) {
    // console.log(props);
    return <div style={{...props.style,backgroundColor:props.bgcolor}} 
        className="Button" onClick={(evt)=>{props.action()}}>{props.title}</div>
}

Button.propTypes= {
    title:PropTypes.string.isRequired,
    action:PropTypes.func.isRequired,
    bgcolor:PropTypes.string.isRequired
}

Button.defaultProps={
    action:()=>{console.log('Default action')},
    bgcolor:'green'
}
export default Button;