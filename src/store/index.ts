import { combineReducers, createStore, applyMiddleware } from 'redux';
import { filtersReducer } from './reducers/filters';
import { ticketsReducer } from './reducers/tickets';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  filtersReducer,
  ticketsReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
