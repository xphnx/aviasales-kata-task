import React, { FC } from 'react';
import classes from './Warning.module.scss';

interface WarningProps {
  text: string;
}

const Warning: FC<WarningProps> = ({ text }) => (
  <div className={classes['warning-message']}>{text}</div>
);

export default Warning;
