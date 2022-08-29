/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React from 'react';

import Loader from '../Loader/Loader';
import styles from './Avatar.module.scss';

function Avatar(props) {
  const { visibleCondition, imageSrc } = props;
  return (
    <>
      {visibleCondition ? (
        <Loader />
      ) : (
        <img className={styles.avatar} alt="avatar" src={imageSrc} />
      )}
    </>
  );
}

export default Avatar;
