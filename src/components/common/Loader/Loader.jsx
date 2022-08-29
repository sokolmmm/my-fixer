import React from 'react';

import loaderGIF from '../../../assets/images/loader_circle.gif';
import styles from './Loader.module.scss';

function Loader() {
  return <img className={styles.loader} src={loaderGIF} alt="loader" />;
}

export default Loader;
