import {
  Ticket,
  TicketActions,
  TicketActionTypes,
  TicketWithId,
} from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { v4 as uuidv4 } from 'uuid';

export const TicketActionCreators = {
  setIsLoading: (payload: boolean): TicketActions => ({
    type: TicketActionTypes.setIsLoading,
    payload,
  }),
  getSearchId: (id: string): TicketActions => ({
    type: TicketActionTypes.getSearchId,
    payload: id,
  }),
  getTickets: (tickets: TicketWithId[]): TicketActions => ({
    type: TicketActionTypes.getTickets,
    payload: tickets,
  }),
  setError: (payload: boolean): TicketActions => ({
    type: TicketActionTypes.setError,
    payload,
  }),
  setPortionLoading: (payload: boolean): TicketActions => ({
    type: TicketActionTypes.setPortionLoading,
    payload,
  }),
  initializeSearch:
    (): ThunkAction<void, {}, {}, AnyAction> =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
      try {
        fetch('https://aviasales-test-api.kata.academy/search')
          .then(data => data.json())
          .then(({ searchId }) => {
            dispatch(TicketActionCreators.getSearchId(searchId));
            return searchId;
          })
          .then(searchId => {
            dispatch(TicketActionCreators.setIsLoading(true));
            dispatch(TicketActionCreators.fetchTickets(searchId));
          });
      } catch (e) {
        dispatch(TicketActionCreators.setError(true));
      }
    },
  fetchTickets:
    (searchId: string): ThunkAction<void, {}, {}, AnyAction> =>
    async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
      try {
        fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
        )
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then(({ tickets, stop }) => {
            const ticketsWithId = tickets.map((ticket: Ticket) => ({
              ...ticket,
              id: uuidv4(),
            }));

            dispatch(TicketActionCreators.getTickets(ticketsWithId));
            dispatch(TicketActionCreators.setPortionLoading(false));

            if (!stop) dispatch(TicketActionCreators.fetchTickets(searchId));
            if (stop) dispatch(TicketActionCreators.setIsLoading(false));
          })
          .catch(e => {
            if (e.status === 500) {
              dispatch(TicketActionCreators.fetchTickets(searchId));
            } else {
              dispatch(TicketActionCreators.setError(true));
              dispatch(TicketActionCreators.setIsLoading(false));
            }
          });
      } catch (e) {
        dispatch(TicketActionCreators.setError(true));
        dispatch(TicketActionCreators.setIsLoading(false));
      }
    },
};
