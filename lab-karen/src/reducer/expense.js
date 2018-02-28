let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
    let changedState = {...state};
    delete changedState[payload._id];
    return changedState;
  case 'EXPENSE_CREATE': return {...state, [payload._id]: {}};
  case 'EXPENSE_UPDATE': return state.map(exp => exp._id === payload._id ? payload : exp);
  case 'EXPENSE_DELETE': return state.filter(exp => exp._id !== payload._id);
  case 'EXPENSE_RESET': return initialState;
  default: return state;
  }
};
