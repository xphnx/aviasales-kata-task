import { FilterActions, FilterActionsTypes, TransferOptionTitles } from "./types";

export const FilterActionCreators = {
    checkQuality: (name: string): FilterActions => ({type: FilterActionsTypes.chooseQuality, payload: name}),
    chooseTransfer: (name: string): FilterActions => {
        if (name === TransferOptionTitles.allTransfers) return ({type: FilterActionsTypes.chooseAllTransfers})
        return {type: FilterActionsTypes.chooseTransfer, payload: name}
    },
    uncheckTransfer: (name: string, flag: boolean = false): FilterActions => {
        if (name === TransferOptionTitles.allTransfers && !flag) return ({type: FilterActionsTypes.uncheckAllTransfers});
        return {type: FilterActionsTypes.uncheckTransfer, payload: name}
    }
}