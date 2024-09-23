import { createReducer, on } from '@ngrx/store';
import { setUser, resetUser } from './user.actions';
export const initialState = "";

export const userReducer = createReducer(
  initialState,
  // store update
  on(setUser, (state, action) => state=action.username), 
  on(resetUser, (state) => state=""),
);