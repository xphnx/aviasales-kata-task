export interface TransferFilter {
    transfer: string,
    description: string,
    checked: boolean
}

export interface FilterState {
    checkedQualitiesFilter: string,
    checkedTransfersFilter: TransferFilter[]
}

export enum TransferOptionTitles {
    allTransfers = 'all-transfers',
    withoutTransfers = 'without-transfers',
    oneTransfer = '1-transfer',
    twoTransfers = '2-transfer',
    threeTransfers = '3-transfer'
}

export enum FilterActionsTypes {
    chooseQuality = 'CHOOSE_QUALITY',
    uncheckTransfer = 'UNCHECK_TRANSFER',
    chooseTransfer = 'CHOOSE_TRANSFER',
    chooseAllTransfers = 'CHOOSE_ALL_TRANSFERS',
    uncheckAllTransfers = 'UNCHECK_ALL_TRANSFERS'
}

export interface ChooseQualityAction {
    type: FilterActionsTypes.chooseQuality,
    payload: string
}

export interface ChooseTransferAction {
    type: FilterActionsTypes.chooseTransfer,
    payload: string
}

export interface UncheckTransferAction {
    type: FilterActionsTypes.uncheckTransfer,
    payload: string
}

export interface UncheckAllTransfersAction {
    type: FilterActionsTypes.uncheckAllTransfers
}

export interface ChooseAllTransferAction {
    type: FilterActionsTypes.chooseAllTransfers
}

export type FilterActions = 
    ChooseQualityAction | 
    ChooseTransferAction |
    UncheckTransferAction |
    ChooseAllTransferAction |
    UncheckAllTransfersAction