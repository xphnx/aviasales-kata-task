import { format } from 'date-fns';
import React, { FC } from 'react';
import {
  calculateEndOfTransfer,
  formatDurationToReadableTime,
  formatEndOfWords,
} from '../../utils/formatHelpers';
import { Segment } from '../Ticket/Ticket';
import styles from './Transfer.module.scss';

const Transfer: FC<Segment> = ({
  date,
  destination,
  duration,
  origin,
  stops,
}) => {
  const arrayWords = ['пересадка', 'пересадки', 'пересадок'];

  return (
    <div className={styles.race}>
      <div className={styles.info}>
        <div className={styles.title}>
          {origin} –{destination}
        </div>
        <div className={styles.content}>
          {format(new Date(date), 'HH:mm')} –{' '}
          {calculateEndOfTransfer(date, duration)}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>В пути</div>
        <div className={styles.content}>
          {formatDurationToReadableTime(date, duration)}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          {stops.length} {formatEndOfWords(stops.length, arrayWords)}
        </div>
        <div className={styles.content}>{stops.join(', ')}</div>
      </div>
    </div>
  );
};

export default Transfer;
