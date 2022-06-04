import React, { FC, useState, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import {
  chooseActionToCheck,
  chooseActionToUncheck,
} from '../../utils/calculateActiveFilter';
import styles from './TransfersInput.module.scss';

interface TransfersInputProps {
  transfer: string;
  description: string;
  checked: boolean;
}

const TransfersInput: FC<TransfersInputProps> = ({
  transfer,
  description,
  checked: isChecked,
}) => {
  const {
    chooseTransfer,
    uncheckTransfer,
    uncheckAllTransfers,
    chooseAllTransfers,
    uncheckAllCheckboxAndClicked,
  } = useActions();
  const { filters } = UseTypedSelector(
    (state) => state.filtersReducer.transfersFilter
  );
  const [checked, setChecked] = useState(isChecked);

  const handleChangeChecked = (): void => {
    if (checked) {
      chooseActionToUncheck(
        uncheckAllTransfers,
        uncheckAllCheckboxAndClicked,
        uncheckTransfer,
        transfer,
        filters
      );
    }
    if (!checked) {
      chooseActionToCheck(
        chooseAllTransfers,
        chooseTransfer,
        transfer,
        filters
      );
    }
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <li className={styles['list-item']}>
      <input
        id={transfer}
        type="checkbox"
        checked={checked}
        name={transfer}
        onChange={handleChangeChecked}
      />
      <label className={styles.label} htmlFor={transfer}>
        {description}
      </label>
    </li>
  );
};

export default TransfersInput;
