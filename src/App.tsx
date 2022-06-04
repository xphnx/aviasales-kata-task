import React, { useEffect, FC } from 'react';
import styles from './App.module.scss';

import TransfersFilter from './components/TransfersFilter/TransfersFilter';
import QualitiesFilter from './components/QualitiesFilter/QualitiesFilter';

import logo from './img/logo.png';
import { useActions } from './hooks/useActions';
import TicketList from './components/TicketList/TicketList';

const App: FC = () => {
  const { initializeSearch } = useActions();
  useEffect(() => {
    initializeSearch();
  }, [initializeSearch]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} width="60" height="60" alt="logo" />
        </div>
      </header>
      <main>
        <section className={styles.filters}>
          <div className="container">
            <TransfersFilter />
            <QualitiesFilter />
          </div>
        </section>
        <section>
          <div className="container">
            <TicketList />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
