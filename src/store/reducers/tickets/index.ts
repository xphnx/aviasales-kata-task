import { TicketActions, TicketActionTypes, TicketState } from './types';

const initalState: TicketState = {
  searchId: '',
  isLoading: false,
  tickets: [],
  error: false,
  portionLoading: true,
};

export const ticketsReducer = (
  state: TicketState = initalState,
  action: TicketActions
) => {
  switch (action.type) {
    case TicketActionTypes.setIsLoading:
      return { ...state, isLoading: action.payload };
    case TicketActionTypes.setPortionLoading:
      return { ...state, portionLoading: action.payload };
    case TicketActionTypes.setError:
      return { ...state, error: action.payload };
    case TicketActionTypes.getSearchId:
      return { ...state, searchId: action.payload };
    case TicketActionTypes.getTickets:
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    default:
      return state;
  }
};
