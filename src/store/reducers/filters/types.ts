export interface TransferFilter {
  transfer: string;
  description: string;
  checked: boolean;
}

export interface FilterState {
  checkedQualitiesFilter: string;
  transfersFilter: {
    filters: TransferFilter[];
    activeFilters: string[];
  };
}

export enum TransferOptionTitles {
  allTransfers = 'all-transfers',
  withoutTransfers = 'without-transfers',
  oneTransfer = '1-transfer',
  twoTransfers = '2-transfer',
  threeTransfers = '3-transfer',
}

export type TransferOptionTitlesType =
  | TransferOptionTitles.allTransfers
  | TransferOptionTitles.withoutTransfers
  | TransferOptionTitles.oneTransfer
  | TransferOptionTitles.twoTransfers
  | TransferOptionTitles.threeTransfers;

export enum FilterActionsTypes {
  chooseQuality = 'CHOOSE_QUALITY',
  uncheckTransfer = 'UNCHECK_TRANSFER',
  chooseTransfer = 'CHOOSE_TRANSFER',
  chooseAllTransfers = 'CHOOSE_ALL_TRANSFERS',
  uncheckAllTransfers = 'UNCHECK_ALL_TRANSFERS',
  uncheckAllCheckboxAndClicked = 'UNCHECK_ALLCHECKBOX_AND_CLICKED',
}

export interface ChooseQualityAction {
  type: FilterActionsTypes.chooseQuality;
  payload: string;
}

export interface uncheckAllCheckboxAndClicked {
  type: FilterActionsTypes.uncheckAllCheckboxAndClicked;
  payload: string;
}

export interface ChooseTransferAction {
  type: FilterActionsTypes.chooseTransfer;
  payload: string;
}

export interface UncheckTransferAction {
  type: FilterActionsTypes.uncheckTransfer;
  payload: string;
}

export interface UncheckAllTransfersAction {
  type: FilterActionsTypes.uncheckAllTransfers;
}

export interface ChooseAllTransferAction {
  type: FilterActionsTypes.chooseAllTransfers;
}

export type FilterActions =
  | ChooseQualityAction
  | ChooseTransferAction
  | UncheckTransferAction
  | ChooseAllTransferAction
  | UncheckAllTransfersAction
  | uncheckAllCheckboxAndClicked;
