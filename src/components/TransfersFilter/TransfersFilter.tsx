import React, { FC } from 'react';
import styles from './TransfersFilter.module.scss';
import TransfersInput from '../TransfersInput/TransfersInput';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';

const TransfersFilter: FC = () => {
  const { filters } = UseTypedSelector(
    (state) => state.filtersReducer.transfersFilter
  );

  return (
    <form className={styles['transfers-filter']}>
      <h2 className={styles.header}>Количество пересадок</h2>
      <ul className={styles.list}>
        {filters.map((f) => (
          <TransfersInput key={f.transfer} {...f} />
        ))}
      </ul>
    </form>
  );
};

export default TransfersFilter;
