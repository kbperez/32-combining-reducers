import React from 'react';
import {connect} from 'react-redux';
import {expenseUpdate, expenseDelete} from '../../actions/expense-actions';
import { renderIf } from '../../lib/utils';
import ExpenseForm from '../expense-form/expense-form';


class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
  }

  handleUpdate(exp) {
    this.setState({editing: !this.state.editing});
    this.props.categoryUpdate(exp);
  }

  handleDelete() {
    this.props.categoryDelete(this.props.exp);
  }

  handleUpdateForm() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    return (
      <div key={this.props.exp._id} onDoubleClick={this.handleUpdateForm}>
        <h4>Category: {this.props.exp.title}</h4>
        <p> Budget: ${this.props.exp.budget}</p>
        <button type="button" onClick={this.handleDelete}>Delete</button>
        {renderIf(this.state.editing, <CategoryForm
          category={this.props.exp}
          buttonText="Update"
          onComplete={this.handleUpdate}/>)}
      </div>
    );
  }
}

export default ExpenseItem;
