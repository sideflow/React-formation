import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeSVGViewer.module.css';
import {IMG_BASE_DIR} from '../../config/config'

const MemeSVGViewer = (props) => 
    <svg className={styles.MemeSVGViewer} data-testid="MemeSVGViewer" 
      viewBox={`0 0 ${props.meme.image?props.meme.image.w:1000} 
                    ${props.meme.image?props.meme.image.h:1000}`}>
        {props.meme.image && <image x={0} y={0} href={`${IMG_BASE_DIR}${props.meme.image.url}`} />}
        <text x={props.meme.x} y={props.meme.y}
        style={{fill:props.meme.color,fontSize:props.meme.fontSize,fontWeight:props.meme.fontWeight}}
        textDecoration={props.meme.underline ? 'underline' : 'none'}
        fontStyle={props.meme.italic ? 'italic' : 'normal'}
        >
        {props.meme.text}</text>
    </svg>;

MemeSVGViewer.propTypes = {
  meme: PropTypes.object.isRequired,
};

MemeSVGViewer.defaultProps = {
  meme: {
    titre:"React is easy",
    text:"J'ai fait des boutons en React !",
    x:300,
    y:680,
    color:"cyan",
    fontSize:"52",
    imageId:"2",
    fontWeight:"800",
    underline:true,
    italic:true,
    frameSizeX:0,
    frameSizeY:0,
    id:24,
    image: {
        id:2,
        url:"dog.jpg",
        w:1212,
        h:712
      }
  }
};

export default MemeSVGViewer;
