/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ResultsCard.module.scss';
import avatar from '../../../../assets/images/avatar.png';
import LevelIcon from '../../../common/Icons/LevelIcon';

function ResultsCard({
  name, location, stack, dailyRate, rating, userImg,
}) {
  const [levelStar, setLevelStar] = React.useState();

  React.useState(() => {
    if (rating === 1) {
      setLevelStar(styles.silver);
    } else if (rating === 2) {
      setLevelStar(styles.gold);
    }
  });
  return (
    <div className={styles.card}>
      <img src={userImg || avatar} alt="avatar" />
      <div className={styles.description}>
        <div className={styles.title}>
          <h3 className={levelStar}>{name}</h3>
          <div className={levelStar}>{rating ? <LevelIcon /> : null}</div>
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

export default ResultsCard;
