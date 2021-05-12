import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.scss';

const MemeThumbnail = () => (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    MemeThumbnail Component
  </div>
);

MemeThumbnail.propTypes = {};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;
