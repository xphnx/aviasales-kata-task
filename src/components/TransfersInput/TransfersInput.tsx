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

function isAllChecked(filters: TransferFilter[]) {
    const filter = filters.find(f => f.transfer === TransferOptionTitles.allTransfers);
    if (filter) return filter.checked;
}

function areAllBoxesChecked(filters: TransferFilter[]) {
    const checkedBoxes = filters.filter(f => f.checked);
    if (checkedBoxes) return checkedBoxes.length >= 3;
}

const TransfersInput: FC<TransfersInputProps> = ({transfer, description, checked: isChecked}) => {
    const { chooseTransfer, uncheckTransfer, chooseAllTransfers, uncheckAllTransfers } = useActions();
    const { checkedTransfersFilter } = UseTypedSelector(state => state.filtersReducer)
    const [checked, setChecked] = useState(isChecked);

    const handleChangeChecked = () => {
        if (!checked && transfer === TransferOptionTitles.allTransfers) return chooseAllTransfers();
        if (checked && transfer === TransferOptionTitles.allTransfers) return uncheckAllTransfers();
        if (checked) {
            if (isAllChecked(checkedTransfersFilter)) uncheckTransfer(TransferOptionTitles.allTransfers)
            uncheckTransfer(transfer);
        }
        if (!checked) {
            chooseTransfer(transfer);
            if (areAllBoxesChecked(checkedTransfersFilter)) chooseTransfer(TransferOptionTitles.allTransfers)
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