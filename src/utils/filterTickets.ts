import { TransferOptionTitles } from '../store/reducers/filters/types';
import { TicketWithId } from '../store/reducers/tickets/types';

export const sortTickets = (tickets: TicketWithId[] | [], filter: string) => {
  switch (filter) {
    case 'cheap':
      return tickets.sort((a, b) => +a.price - +b.price);
    case 'fast':
      return tickets.sort((a, b) => {
        const first = a.segments[0].duration + a.segments[1].duration;
        const second = b.segments[0].duration + b.segments[1].duration;
        return first - second;
      });
    default:
      return tickets;
  }
};

export const filterTickets = (
  tickets: TicketWithId[],
  activeFilters: string[]
) => {
  if (!activeFilters.length) return [];
  if (activeFilters.includes(TransferOptionTitles.allTransfers)) return tickets;
  return tickets.filter(ticket => {
    const sumStops =
      ticket.segments[0].stops.length + ticket.segments[1].stops.length;
    return activeFilters.includes(sumStops.toString());
  });
};