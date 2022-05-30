import styles from './Ticket.module.scss';

import S7logo from '../../img/S7-Logo.png';

const Ticket = () => {
    return (
      <div className={styles.ticket}>
        <header className={styles.header}>
          <div className={styles.price}>13 400 Р</div>
          <div className={styles.logo}>
            <img
              src={S7logo}
              width="110"
              height="36"
              alt="Airline Logo"
            />
          </div>
        </header>
        <div className={styles.body}>
          <div className={styles.race}>
            <div className={styles.info}>
              <div className={styles.title}>MOW – HKT</div>
              <div className={styles.content}>10:45 – 08:00</div>
            </div>
            <div className={styles.info}>
              <div className={styles.title}>В пути</div>
              <div className={styles.content}>21ч 15м</div>
            </div>
            <div className={styles.info}>
              <div className={styles.title}>2 пересадки</div>
              <div className={styles.content}>HKG, JNB</div>
            </div>
          </div>
          <div className={styles.race}>
            <div className={styles.info}>
              <div className={styles.title}>MOW – HKT</div>
              <div className={styles.content}>11:20 – 00:50</div>
            </div>
            <div className={styles.info}>
              <div className={styles.title}>В пути</div>
              <div className={styles.content}>13ч 30м</div>
            </div>
            <div className={styles.info}>
              <div className={styles.title}>1 пересадка</div>
              <div className={styles.content}>HKG</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Ticket;