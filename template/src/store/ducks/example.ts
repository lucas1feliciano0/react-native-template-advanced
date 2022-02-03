import {createActions, createReducer} from 'reduxsauce';

type INITIAL_STATE_PROPS = {};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    example: [],
  },
  {prefix: '@PREFIX/'},
);

// Reducer

const INITIAL_STATE: INITIAL_STATE_PROPS = {};

// Handlers

export const exampleHandler = (state = INITIAL_STATE) => {
  return {...state};
};

export const HANDLERS = {
  [Types.EXAMPLE]: exampleHandler,
};

export default createReducer(INITIAL_STATE, HANDLERS);
