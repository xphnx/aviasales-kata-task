import { FilterActions, FilterActionsTypes } from './types';

export const FilterActionCreators = {
  checkQuality: (name: string): FilterActions => ({
    type: FilterActionsTypes.chooseQuality,
    payload: name,
  }),
  chooseTransfer: (name: string): FilterActions => ({
    type: FilterActionsTypes.chooseTransfer,
    payload: name,
  }),
  uncheckTransfer: (name: string): FilterActions => ({
    type: FilterActionsTypes.uncheckTransfer,
    payload: name,
  }),
  uncheckAllTransfers: (): FilterActions => ({
    type: FilterActionsTypes.uncheckAllTransfers,
  }),
  chooseAllTransfers: (): FilterActions => ({
    type: FilterActionsTypes.chooseAllTransfers,
  }),
  uncheckAllCheckboxAndClicked: (name: string): FilterActions => ({
    type: FilterActionsTypes.uncheckAllCheckboxAndClicked,
    payload: name,
  }),
};

export type uncheckAllTransfersType =
  typeof FilterActionCreators.uncheckAllTransfers;
export type uncheckAllCheckboxAndClickedType =
  typeof FilterActionCreators.uncheckAllCheckboxAndClicked;
export type uncheckTransferType = typeof FilterActionCreators.uncheckTransfer;
export type chooseAllTransfersType =
  typeof FilterActionCreators.chooseAllTransfers;
export type chooseTransferType = typeof FilterActionCreators.chooseTransfer;
