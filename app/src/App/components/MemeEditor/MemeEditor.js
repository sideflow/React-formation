import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeEditor.module.scss';

const MemeEditor = () => (
  <div className={styles.MemeEditor} data-testid="MemeEditor">
    MemeEditor Component
  </div>
);

MemeEditor.propTypes = {};

MemeEditor.defaultProps = {};

export default MemeEditor;
