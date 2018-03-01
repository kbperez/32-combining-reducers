import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import {categoryCreate, categoryUpdate} from '../../actions/category-actions';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import ExpenseForm from '../expense-form/expense-form';

class Dashboard extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <h1>Budget App</h1>

        <CategoryForm
          buttonText='Create'
          onComplete={this.props.categoryCreate}/>
        {renderIf(this.props.categories, this.props.categories.map(category =>
          <CategoryItem
            className="category-items"
            key={category._id}
            category={category}></CategoryItem>)
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
