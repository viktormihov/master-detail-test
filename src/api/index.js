import 'whatwg-fetch';

const parseResponse = (response) => {
  return response.json();
};

export const fetchTransactions = (url = 'http://private-5d708-interviewfront.apiary-mock.com/transactions') => {
  return fetch(url)
    .then(parseResponse)
};
