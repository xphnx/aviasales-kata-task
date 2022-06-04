import { FilterActionCreators } from './reducers/filters/action-creators';
import { TicketActionCreators } from './reducers/tickets/action-creators';

export const allActionCreators = {
  ...FilterActionCreators,
  ...TicketActionCreators,
};
