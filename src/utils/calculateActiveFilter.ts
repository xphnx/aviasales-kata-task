import {
  chooseAllTransfersType,
  chooseTransferType,
  uncheckAllCheckboxAndClickedType,
  uncheckAllTransfersType,
  uncheckTransferType,
} from '../store/reducers/filters/action-creators';
import {
  TransferFilter,
  TransferOptionTitles,
} from '../store/reducers/filters/types';
import { areAllBoxesChecked, isAllTransfersChecked } from './predicateHelpers';
import { toggleTransfer } from './reducerHelpers';

const filterNameToActiveLength: { [key: string]: string } = {
  [TransferOptionTitles.allTransfers]: 'all',
  [TransferOptionTitles.withoutTransfers]: '0',
  [TransferOptionTitles.oneTransfer]: '1',
  [TransferOptionTitles.twoTransfers]: '2',
  [TransferOptionTitles.threeTransfers]: '3',
};

export const deriveActiveFilterToState = (
  f: TransferFilter[],
  payload: string[],
  checked: boolean
): { activeFilters: string[]; filters: TransferFilter[] } => {
  const filters = [...toggleTransfer(f, payload, checked)];
  const activeFilters = filters
    .filter((filter) => filter.checked)
    .map((filter) => filterNameToActiveLength[filter.transfer]);

  return {
    activeFilters,
    filters,
  };
};

export const chooseActionToUncheck = (
  uncheckAllTransfers: uncheckAllTransfersType,
  uncheckAllCheckboxAndClicked: uncheckAllCheckboxAndClickedType,
  uncheckTransfer: uncheckTransferType,
  transfer: string,
  filters: TransferFilter[]
): void => {
  if (
    isAllTransfersChecked(filters) &&
    transfer === TransferOptionTitles.allTransfers
  ) {
    uncheckAllTransfers();
  } else if (
    isAllTransfersChecked(filters) &&
    transfer !== TransferOptionTitles.allTransfers
  ) {
    uncheckAllCheckboxAndClicked(transfer);
  } else {
    uncheckTransfer(transfer);
  }
};

export const chooseActionToCheck = (
  chooseAllTransfers: chooseAllTransfersType,
  chooseTransfer: chooseTransferType,
  transfer: string,
  filters: TransferFilter[]
): void => {
  if (
    transfer === TransferOptionTitles.allTransfers ||
    areAllBoxesChecked(filters)
  ) {
    chooseAllTransfers();
  } else {
    chooseTransfer(transfer);
  }
};
