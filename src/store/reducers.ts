import { FilterActions, FilterActionsTypes, FilterState, TransferOptionTitles } from "./types";

const initalState: FilterState = {
    checkedQualitiesFilter: 'cheap',
    checkedTransfersFilter: [
        {transfer: TransferOptionTitles.allTransfers, description: 'Все', checked: false},
        {transfer: TransferOptionTitles.withoutTransfers, description: 'Без пересадок', checked: false},
        {transfer: TransferOptionTitles.oneTransfer, description: '1 пересадка', checked: true},
        {transfer: TransferOptionTitles.twoTransfers, description: '2 пересадки', checked: false},
        {transfer: TransferOptionTitles.threeTransfers, description: '3 пересадки', checked: true}
    ]
}

export const filtersReducer = (state: FilterState = initalState, action: FilterActions): FilterState => {
    const { checkedTransfersFilter: transfers } = state;
    switch (action.type) {
        case FilterActionsTypes.chooseQuality: 
            return {...state, checkedQualitiesFilter: action.payload}
        case FilterActionsTypes.uncheckTransfer:
            return {
                ...state, 
                checkedTransfersFilter: [...transfers.map(t => {
                    if (t.transfer === action.payload) return { ...t, checked: false };
                    return t;
                })]
            }
        case FilterActionsTypes.chooseTransfer:
            return {
                ...state, 
                checkedTransfersFilter: [...transfers.map(t => {
                    if (t.transfer === action.payload) return { ...t, checked: true };
                    return t;
                })]
            }
        case FilterActionsTypes.chooseAllTransfers:
            return {
                ...state,
                checkedTransfersFilter: [...transfers.map(t => ({ ...t, checked: true }))]
            }
        case FilterActionsTypes.uncheckAllTransfers:
            return {
                ...state,
                checkedTransfersFilter: [...transfers.map(t => ({ ...t, checked: false }))]
            }
        default: return state;
    }
}