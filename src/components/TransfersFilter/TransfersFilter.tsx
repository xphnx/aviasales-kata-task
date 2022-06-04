import styles from './TransfersFilter.module.scss';
import TransfersInput from '../TransfersInput/TransfersInput';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import React from 'react';

const TransfersFilter = () => {
  const { filters } = UseTypedSelector(
    state => state.filtersReducer.transfersFilter
  );

  return (
    <form className={styles['transfers-filter']}>
      <h2 className={styles.header}>Количество пересадок</h2>
      <ul className={styles.list}>
        {filters.map(f => {
          return <TransfersInput key={f.transfer} {...f} />;
        })}
      </ul>
    </form>
  );
};

export default TransfersFilter;
