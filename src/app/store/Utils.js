// Basic async action types
const asyncTypes = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

// Async action type namespacing helper
export const createAsyncTypes = (typeString, additionalTypes = []) => [...Object.values(asyncTypes), ...additionalTypes].reduce((acc, curr) => {
  acc[curr] = `${typeString}_${curr}`;
  return acc;
}, {});

// Action creation helper
export const createAction = (type, payload = {}) => ({ type, ...payload });

// Reducer creation helper
export const createReducer = (initialState, handlers) => (state = initialState, action) => (Object.prototype.hasOwnProperty.call(handlers, action.type)
  ? handlers[action.type](state, action)
  : state);
