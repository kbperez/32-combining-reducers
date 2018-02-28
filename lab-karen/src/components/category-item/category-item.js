import React from 'react';
import {connect} from 'react-redux';
import { renderIf } from '../../lib/utils';
import CategoryForm from '../category-form/category-form';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';


class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    // this.handleCreate = this.handleCreate.bind(this);
  }

  handleUpdate(cat) {
    this.setState({editing: !this.state.editing});
    this.props.categoryUpdate(cat);
  }

  handleDelete() {
    this.props.categoryDelete(this.props.cat);
  }

  handleUpdateForm() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    return (
      <div key={this.props.cat._id} onDoubleClick={this.handleUpdateForm}>
        <h4>Category: {this.props.cat.title}</h4>
        <p> Budget: ${this.props.cat.budget}</p>
        <button type="button" onClick={this.handleDelete}>Delete</button>
        {renderIf(this.state.editing, <CategoryForm
          category={this.props.cat}
          buttonText="Update"
          onComplete={this.handleUpdate}/>)}

        <ExpenseForm
          buttonText='Add'
          onComplete={this.props.expenseCreate}/>
        <h2>ExpenseForm</h2>
        {this.props.expenses ?
          this.props.expenses.map(exp =>
            <ExpenseItem key={exp._id} exp={exp}/>)
          :
          undefined
        }
      </div>
    );
  }
}

export default CategoryItem;
