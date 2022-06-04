import React, { useState } from 'react';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import classes from './TicketList.module.scss';
import Ticket from '../Ticket/Ticket';
import Spinner from '../Spinner/Spinner';
import { filterTickets, sortTickets } from '../../utils/filterTickets';
import Warning from '../Warning/Warning';

const TicketList = () => {
  const { tickets, isLoading, error, portionLoading } = UseTypedSelector(
    store => store.ticketsReducer
  );
  const {
    checkedQualitiesFilter,
    transfersFilter: { activeFilters },
  } = UseTypedSelector(store => store.filtersReducer);

  const [amount, setAmount] = useState(5);

  const filteredTickets = filterTickets(tickets, activeFilters);
  const sortedTickets = sortTickets(filteredTickets, checkedQualitiesFilter);

  return (
    <React.Fragment>
      {error && <Warning text={'Что-то пошло не так... Попробуйте позже'} />}

      {!error && portionLoading && <Warning text={'Загрузка билетов...'} />}

      {sortedTickets?.slice(0, amount).map(ticket => (
        <Ticket key={ticket.id} {...ticket} />
      ))}

      {isLoading && <Spinner />}

      {!portionLoading && !error && !sortedTickets.length && (
        <Warning text={'Нет билетов, подходящих требованиям фильтра'} />
      )}

      {!error && amount < sortedTickets.length && (
        <button
          type="button"
          onClick={() => setAmount(amount + 5)}
          className={classes['show-more']}
        >
          Показать еще 5 билетов
        </button>
      )}
    </React.Fragment>
  );
};

export default TicketList;
