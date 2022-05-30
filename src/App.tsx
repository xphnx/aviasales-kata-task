import React from 'react';
import styles from './App.module.scss';

import TransfersFilter from './components/TransfersFilter/TransfersFilter';
import QualitiesFilter from './components/QualitiesFilter/QualitiesFilter';
import Ticket from './components/Ticket/Ticket';
import ButtonShowMore from './components/ButtonShowMore/ButtonShowMore';

import logo from './img/logo.png';

function App() {
  return (
    <React.Fragment>
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
          <Ticket />
          <ButtonShowMore />
        </div>
      </section>
    </main>
    </React.Fragment>
  )
}

export default App;
