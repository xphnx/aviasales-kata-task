import styles from './QualitiesFilter.module.scss';
import QualitiesInput from '../QualitiesInput/QualitiesInput';
import { FC } from 'react';

const qualities = [
  {quality: 'cheap', description: 'самый дешевый' }, 
  {quality: 'fast', description: 'самый быстрый'},
  {quality: 'optimal', description: 'оптимальный'}
];

const QualitiesFilter: FC = () => {  
    return (
        <form className={styles['qualities-filter']}>
          {qualities.map((q) => <QualitiesInput key={q.quality} {...q} />)}
        </form>
    )
}

export default QualitiesFilter;