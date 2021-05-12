import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';
import MemeSVGViewer from '../MemeSVGViewer/MemeSVGViewer';
import MemeForm from '../MemeForm/MemeForm';
import { initialState as currentInitialState } from '../../store/currentReducer';
import store, { initialState as srvdataInitialState } from '../../store/store';


const MemeEditor = () => {

  const [current, setCurrent] = useState(currentInitialState);
  const [images, setImages] = useState(srvdataInitialState.images);

  useEffect(() => {
    setImages(store.getState().srvdata.images);
    setCurrent(store.getState().current);

    store.subscribe(() => { 
      setImages(store.getState().srvdata.images);
      setCurrent(store.getState().current);
      })
    }, []);

  return (
  <div className={styles.MemeEditor} data-testid="MemeEditor">
  <div>
    <MemeSVGViewer meme={{...current, image: images.find(e => e.id === current.imageId)}}/>;
  </div>
  <MemeForm></MemeForm>
  </div>);}

MemeEditor.propTypes = {};

MemeEditor.defaultProps = {};

export default MemeEditor;
