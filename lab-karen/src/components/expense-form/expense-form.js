import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense
      ? this.props.expense
      : {
        spend: '',
        cost: 0,
        completed: false,
        editing: false,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onComplete(this.state);
    this.setState({spend: '', cost: 0});
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="spend"
          placeholder="Expense Name"
          value={this.state.spend}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="cost"
          placeholder="Expense Amount"
          value={this.state.cost}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>

    );
  }
}

export default ExpenseForm;
