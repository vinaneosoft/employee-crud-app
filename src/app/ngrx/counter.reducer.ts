import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incrementByAmount } from './counter.actions';

export const initialState = 0; // local storage

export const counterReducer = createReducer(
  initialState,
  // store update
  on(increment, (state) => state + 1), 
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(incrementByAmount, (state, action) => state+action.amount),
);