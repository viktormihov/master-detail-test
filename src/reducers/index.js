import {combineReducers} from 'redux';

const list = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS':
      return action.response.transactions;
    default:
      return state;
  }
};

const sort = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  getTransactions: list,
  getSorted: sort
});

export default reducer;
