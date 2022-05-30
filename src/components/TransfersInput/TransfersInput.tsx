import {FC, useState, useEffect} from 'react';
import { useActions } from '../../hooks/useActions';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import { TransferFilter, TransferOptionTitles } from '../../store/types';
import styles from './TransfersInput.module.scss';

interface TransfersInputProps {
    transfer: string
    description: string
    checked: boolean
}

function isAllTransfersChecked(filters: TransferFilter[]) {
    const filter = filters.find(f => f.transfer === TransferOptionTitles.allTransfers);
    if (filter) return filter.checked;
}

function areAllBoxesChecked(filters: TransferFilter[]) {
    const checkedBoxes = filters.filter(f => f.checked);
    if (checkedBoxes) return checkedBoxes.length >= filters.length - 2;
}

const TransfersInput: FC<TransfersInputProps> = ({transfer, description, checked: isChecked}) => {
    const { chooseTransfer, uncheckTransfer } = useActions();
    const { checkedTransfersFilter } = UseTypedSelector(state => state.filtersReducer)
    const [checked, setChecked] = useState(isChecked);

    const handleChangeChecked = () => {
        if (checked) {
            if (isAllTransfersChecked(checkedTransfersFilter)) uncheckTransfer(TransferOptionTitles.allTransfers, true)
            uncheckTransfer(transfer);
        }
        if (!checked) {
            if (areAllBoxesChecked(checkedTransfersFilter)) chooseTransfer(TransferOptionTitles.allTransfers)
            chooseTransfer(transfer);
        }
        setChecked(!checked)
    }

    useEffect(() => {
        setChecked(isChecked)
    }, [isChecked])

    return (
        <li className={styles['list-item']}>
            <input
                id={transfer}
                type="checkbox"
                checked={checked}
                name={transfer}
                onChange={handleChangeChecked}
            />
            <label 
                className={styles.label}
                htmlFor={transfer}
                >{description}</label
            >
      </li>
    )
}

export default TransfersInput;