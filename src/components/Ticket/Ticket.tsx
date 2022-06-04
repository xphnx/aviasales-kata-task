import React, { FC } from 'react';
import styles from './Ticket.module.scss';
import { formatNumberWithSpaces } from '../../utils/formatHelpers';
import Transfer from '../Transfer/Transfer';

export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

interface TicketProps {
  price: number;
  carrier: string;
  id: string;
  segments: Segment[];
}

const Ticket: FC<TicketProps> = ({ price, carrier, segments }) => (
  <div className={styles.ticket}>
    <header className={styles.header}>
      <div className={styles.price}>
        {formatNumberWithSpaces(price.toString())} Р
      </div>
      <div className={styles.logo}>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          width="110"
          height="36"
          alt="Airline Logo"
        />
      </div>
    </header>
    <div className={styles.body}>
      {segments.map((race) => (
        <Transfer key={`${race.date}${race.duration}`} {...race} />
      ))}
    </div>
  </div>
);

export default Ticket;
