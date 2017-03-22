import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Transactions extends React.Component {
  componentDidMount() {
    const {fetchTransactions} = this.props;

    fetchTransactions();
  }

  render() {
    const {transactions} = this.props;
console.log(transactions);
    return(
      <table>
        {
          transactions.map(t =>
              <tr>
                <td>{t.id}</td>
                <td>{t.counterparty_name}</td>
              </tr>
            )
        }
      </table>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    transactions: state.getTransactions
  }
};

export default connect(
  mapStateToProps,
  actions
)(Transactions);
