import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchFetchData } from '../saga/Saga';
import { Product } from '../reducer/Reducer';

const sagaMiddleware = createSagaMiddleware();

export type AppState = ReturnType < typeof rootReducer >;

export const rootReducer = combineReducers({Product})


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchData);
