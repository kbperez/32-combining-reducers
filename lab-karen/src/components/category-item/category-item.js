import React from 'react';
import {connect} from 'react-redux';
import { renderIf } from '../../lib/utils';
import CategoryForm from '../category-form/category-form';
import {categoryUpdate, categoryDelete} from '../../actions/category-actions';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';
import {expenseCreate} from '../../actions/expense-actions';


class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category ? this.props.category : {},
      editing: false,
    };
    console.log(this.props.expenses[this.props.category._id].length);
    this.handleEditing = this.handleEditing.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleEditing() {
    this.setState({editing: !this.state.editing});
  }

  handleDelete() {
    this.props.categoryDelete(this.props.cat);
  }

  handleUpdate(cat) {
    this.setState({editing: !this.state.editing});
    this.props.categoryUpdate(cat);
  }

  render() {
    return (

      <div className="category-item" onDoubleClick={this.handleEditing}>
        <h2>Budget Categories</h2>
        <h4>Category: {this.props.category.title}</h4>
        <p>Budget:{this.props.category.budget}</p>
        <button type="button" onClick={this.handleDelete}>Delete</button>

        {renderIf(this.state.editing,
          <div>
            <CategoryForm
              buttonText="Update"
              onComplete={this.props.categoryUpdate}/>
          </div>
        )}

        <ExpenseForm
          buttonText='Add'
          categoryId={this.props.category._id}
          onComplete={this.props.expenseCreate}/>

        {renderIf(this.props.expenses[this.props.category._id].length>0,
          this.props.expenses[this.props.category._id].map(expenses =>
            <ExpenseItem
              key={expenses._id}
              expenses={expenses}/>)
        )}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
  expenseCreate: card => dispatch(expenseCreate(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
