import styles from './TransfersFilter.module.scss';
import TransfersInput from '../TransfersInput/TransfersInput';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';

const TransfersFilter = () => {
    const {checkedTransfersFilter: transfers} = UseTypedSelector(state => state.filtersReducer)
    return (
      <form className={styles['transfers-filter']}>
        <h2 className={styles.header}>Количество пересадок</h2>
        <ul className={styles.list}>
          {transfers.map(t => {
            return <TransfersInput key={t.transfer} {...t} />
          })}
        </ul>
      </form>
    )
}

export default TransfersFilter;
