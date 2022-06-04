import {
  FilterActions,
  FilterActionsTypes,
  FilterState,
  TransferOptionTitles,
} from './types';
import { deriveActiveFilterToState } from '../../../utils/calculateActiveFilter';

const initalState: FilterState = {
  checkedQualitiesFilter: 'cheap',
  transfersFilter: {
    filters: [
      {
        transfer: TransferOptionTitles.allTransfers,
        description: 'Все',
        checked: true,
      },
      {
        transfer: TransferOptionTitles.withoutTransfers,
        description: 'Без пересадок',
        checked: true,
      },
      {
        transfer: TransferOptionTitles.oneTransfer,
        description: '1 пересадка',
        checked: true,
      },
      {
        transfer: TransferOptionTitles.twoTransfers,
        description: '2 пересадки',
        checked: true,
      },
      {
        transfer: TransferOptionTitles.threeTransfers,
        description: '3 пересадки',
        checked: true,
      },
    ],
    activeFilters: [TransferOptionTitles.allTransfers],
  },
};

export const filtersReducer = (
  state: FilterState = initalState,
  action: FilterActions
): FilterState => {
  const {
    transfersFilter: { filters },
  } = state;
  switch (action.type) {
    case FilterActionsTypes.chooseQuality:
      return { ...state, checkedQualitiesFilter: action.payload };
    case FilterActionsTypes.uncheckTransfer:
      return {
        ...state,
        transfersFilter: deriveActiveFilterToState(
          filters,
          [action.payload],
          false
        ),
      };
    case FilterActionsTypes.chooseTransfer:
      return {
        ...state,
        transfersFilter: deriveActiveFilterToState(
          filters,
          [action.payload],
          true
        ),
      };
    case FilterActionsTypes.chooseAllTransfers:
      return {
        ...state,
        transfersFilter: {
          activeFilters: [TransferOptionTitles.allTransfers],
          filters: [...filters.map(t => ({ ...t, checked: true }))],
        },
      };
    case FilterActionsTypes.uncheckAllTransfers:
      return {
        ...state,
        transfersFilter: {
          activeFilters: [],
          filters: [...filters.map(t => ({ ...t, checked: false }))],
        },
      };
    case FilterActionsTypes.uncheckAllCheckboxAndClicked: {
      return {
        ...state,
        transfersFilter: deriveActiveFilterToState(
          filters,
          [action.payload, TransferOptionTitles.allTransfers],
          false
        ),
      };
    }
    default:
      return state;
  }
};
