/* eslint-disable react/prop-types */
import React from 'react';
import styles from './UserCard.module.scss';
import avatar from '../../../../assets/images/avatar.png';
import LevelIcon from '../../../common/Icons/LevelIcon/LevelIcon';

function UserCard({
  name, location, stack, dailyRate, rating, userImg,
}) {
  return (
    <div className={styles.card}>
      <img src={userImg || avatar} alt="avatar" />
      <div className={styles.description}>
        <div className={styles.title}>
          <h3>{name}</h3>
          {rating && <LevelIcon rating={rating} />}
        </div>
        <span>{location}</span>
        <span>
          <b>Stack:</b>
          {' '}
          {stack}
        </span>
        <span>
          <b>Base Daily Rate:</b>
          {` $ ${dailyRate} USD`}
        </span>
      </div>
    </div>
  );
}

export default UserCard;
