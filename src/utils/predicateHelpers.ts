import {
  TransferFilter,
  TransferOptionTitles,
} from '../store/reducers/filters/types';

export function isAllTransfersChecked(filters: TransferFilter[]) {
  const filter = filters.find(
    f => f.transfer === TransferOptionTitles.allTransfers
  );
  if (filter) return filter.checked;
}

export function areAllBoxesChecked(filters: TransferFilter[]) {
  const checkedBoxes = filters.filter(f => f.checked);
  if (checkedBoxes) return checkedBoxes.length >= filters.length - 2;
}
