import { TransferFilter } from '../store/reducers/filters/types';

export const toggleTransfer = (
  transfers: TransferFilter[],
  names: string[],
  checked: boolean
): TransferFilter[] => {
  return transfers.map(t => {
    if (names.includes(t.transfer)) return { ...t, checked };
    return t;
  });
};
