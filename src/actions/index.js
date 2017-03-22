import * as api from '../api';

export const fetchTransactions = () => (dispatch) => {
  return api
    .fetchTransactions()
    .then(
      response => dispatch({
        type: 'FETCH_TRANSACTIONS',
        response: response
      }))
};
