import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { UseTypedSelector } from "../../hooks/UseTypedSelector";
import styles from './QualitiesInput.module.scss';
import { QualitiesInputProps } from './types';

const QualitiesInput:FC<QualitiesInputProps> = ({quality, description}) => {
    const {checkQuality} = useActions();
    const { checkedQualitiesFilter } = UseTypedSelector(store => store.filtersReducer)
    const handleChangeChecked = () => checkQuality(quality);
    
    return (
        <React.Fragment>
            <input
                id={`themost-${quality}`}
                type="radio"
                name="themost"
                value={quality}
                defaultChecked={quality === checkedQualitiesFilter}
            /><label
                htmlFor={`themost-${quality}`}
                className={`${styles.label} ${styles[`label-${quality}`]}`}
                onClick={handleChangeChecked}
                >{description}</label>
        </React.Fragment>
    )
}

export default QualitiesInput;