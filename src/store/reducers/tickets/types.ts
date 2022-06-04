export interface Ticket {
  price: Number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
}

export type TicketWithId = Ticket & { id: string };

export interface TicketState {
  searchId: string;
  tickets: TicketWithId[];
  isLoading: boolean;
  error: boolean;
  portionLoading: boolean;
}

export enum TicketActionTypes {
  initializeSearch = 'INITIALIZE_SEARCH',
  getSearchId = 'GET_SEARCH_ID',
  fetchTickets = 'FETCH_TICKETS',
  setIsLoading = 'SET_IS_LOADING',
  setError = 'SET_ERROR',
  getTickets = 'GET_TICKETS',
  setPortionLoading = 'SET_PORTION_LOADING',
}

export interface SetPortionLoadingAction {
  type: TicketActionTypes.setPortionLoading;
  payload: boolean;
}

export interface InitializeSearchAction {
  type: TicketActionTypes.initializeSearch;
}

export interface GetSearchIdAction {
  type: TicketActionTypes.getSearchId;
  payload: string;
}

export interface GetTicketsAction {
  type: TicketActionTypes.getTickets;
  payload: TicketWithId[];
}

export interface SetIsLoadingAction {
  type: TicketActionTypes.setIsLoading;
  payload: boolean;
}

export interface SetErrorAction {
  type: TicketActionTypes.setError;
  payload: boolean;
}

export type TicketActions =
  | GetSearchIdAction
  | InitializeSearchAction
  | SetIsLoadingAction
  | SetErrorAction
  | GetTicketsAction
  | SetPortionLoadingAction;
