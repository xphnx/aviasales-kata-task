import { FilterActions, FilterActionsTypes } from "./types";

export const FilterActionCreators = {
    checkQuality: (name: string): FilterActions => ({type: FilterActionsTypes.chooseQuality, payload: name}),
    chooseTransfer: (name: string): FilterActions => ({type: FilterActionsTypes.chooseTransfer, payload: name}),
    uncheckTransfer: (name: string): FilterActions => ({type: FilterActionsTypes.uncheckTransfer, payload: name}),
    chooseAllTransfers: (): FilterActions => ({type: FilterActionsTypes.chooseAllTransfers}),
    uncheckAllTransfers: (): FilterActions => ({type: FilterActionsTypes.uncheckAllTransfers})
}