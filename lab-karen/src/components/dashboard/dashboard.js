import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryUpdate, categoryDelete} from '../../actions/category-actions';
import {expenseCreate, expenseUpdate, expenseDelete} from '../../actions/expense-actions';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import ExpenseForm from '../expense-form/expense-form';




class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Budget App</h1>

        <CategoryForm
          buttonText='Create'
          onComplete={this.props.dashboardCategoryCreate}/>
        <h2>Budget Categories</h2>
        {this.props.categories ?
          this.props.categories.map(cat =>
            <CategoryItem key={cat._id} cat={cat} exp={this.props.expenses[cat._id]}
              categoryDelete={this.props.CategoryItemCategoryDelete}
              categoryUpdate={this.props.CategoryItemCategoryUpdate}
              expenseCreate={this.props.dashboardExpenseCreate}
              expenseUpdate={this.props.dashboardExpenseUpdate}
              expenseDelete={this.props.dashboardExpenseDelete}/>)
          :
          undefined
        }

      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
  CategoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  CategoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
  dashboardExpenseCreate: expense => dispatch(expenseCreate(expense)),
  dashboardExpenseUpdate: expense => dispatch(expenseUpdate(expense)),
  dashboardExpenseDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
