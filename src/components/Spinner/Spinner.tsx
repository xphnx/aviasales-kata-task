import React, { FC } from 'react';
import classnames from './Spinner.module.scss';

const Spinner: FC = () => (
  <div className={classnames['lds-roller']}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
