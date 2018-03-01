import React from 'react';
import {connect} from 'react-redux';
import {expenseUpdate, expenseDelete} from '../../actions/expense-actions';
import ExpenseForm from '../expense-form/expense-form';


class ExpenseItem extends React.Component {
  render() {
    return (
      <section id={this.props.exp._id}>
        <h4>{this.props.exp.title}</h4>
        <span onClick={() => this.props.expenseDelete(this.props.exp)}>x</span>
        <ExpenseForm
          buttonText="Update"
          exp={this.props.exp}
          onComplete={this.props.expenseUpdate}/>
      </section>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
