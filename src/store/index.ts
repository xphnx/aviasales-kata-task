import { combineReducers, createStore } from 'redux';
import { filtersReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    filtersReducer
})

export const store = createStore(reducers, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;