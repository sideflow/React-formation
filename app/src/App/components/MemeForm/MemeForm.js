import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.scss';
import { CURRENT_ACTION, initialState as currentInitialState } from '../../store/currentReducer';
import store, { initialState as srvdataInitialState} from '../../store/store';

const MemeForm = () => {
  const [current, setCurrent] = useState(currentInitialState);
  const [images, setImages] = useState(srvdataInitialState.images)

  useEffect(() => {
    setImages(store.getState().srvdata.images);
    setCurrent(store.getState().current)
    store.subscribe(() => { 
      setImages(store.getState().srvdata.images);
      setCurrent(store.getState().current);
      })
  }, []);

  return (
  <div className={styles.MemeForm} data-testid="MemeForm" 
      onReset={evt => {store.dispatch({type: CURRENT_ACTION.RESET_CURRENT})}}
      onSubmit={evt => {
        evt.preventDefault();
        store.dispatch({ type: CURRENT_ACTION.SAVE_CURRENT});
        store.dispatch({ type: 'INIT'});
      }}>
    <label htmlForm="current-titre">Titre</label><br />
    <input type="text" id="current-title" value={current.titre}
      onChange={(evt) => {store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, titre: evt.target.value}})
      }} />
    <hr />
    <label htmlForm="select-img">Image</label>
    <select id="select-img" value={current.imageId} onChange={
        (evt) => {
          store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, imageId: Number(evt.target.value)}})
      }}>
      <option value="">Pas d'image</option>
      {images.map((e, i) => <option value={e.id} key={'optionimg-' + i}>{e.url}</option>)}
    </select>
    <label htmlForm="current-text">Text</label><br /><input type="text" id="current-text" value={current.text} 
      onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, text: evt.target.value}})}></input>
    <hr/>
    <label htmlForm="current-x">X : </label><input className={styles.smallInput} type="number" id="current-x" value={current.x}
      onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, x: evt.target.value}})}></input>
    <label htmlForm="current-y">Y: </label><input className={styles.smallInput} type="number" id="current-y" value={current.y}
      onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, y: evt.target.value}})}></input>
    <hr/>
    <label htmlForm="current-underline">underline: </label><input type="checkbox" id="current-underline"  value={current.undeline}
      onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, underline: evt.target.value}})}/>
    <label htmlForm="current-italic">italic: </label><input type="checkbox" id="current-italic" value={current.italic}
      onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, italic: evt.target.value}})}/>
    <br/>
    <label htmlForm="current-fsize">fontSize: </label><input type="number" id="current-fsize" value={current.fontSize}
      onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, fontSize: evt.target.value}})}/>
    <label htmlForm="current-fweight">fontWeight: </label><input type="number" min="100" max="900" step="100" value={current.fontWeight}
       id="current-fweight" 
       onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, fontWeight: evt.target.value}})}/>
    <br/>
    <label htmlForm="current-color">color</label><br/><input type="color" id="current-color" value={current.color}
      onChange={evt => store.dispatch({type: CURRENT_ACTION.SET_CURRENT, value: {...current, color: evt.target.value}})} />
    <hr/>
    <input type="submit" value="save" />
    <input type="reset" value="reset" />


    </div>)
  };

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
