// 1st Rule: 1 input/select/textarea = 1 state value
// 2nd Rule: always initialise the state in the constructor
// 3rd Rule: always add the attributes `value` and `onChange` for each input/select/textarea

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '', // Inital value for the item
      category: '', // Inital value for the category
      todos: []
    }
    this.handleChange = this.handleChange.bind(this) // Now, the value of `this` in the method `handleChange` is always going to be the current `this` (the current component)
  }
  handleChange(event) {
    console.log("handleChange triggered")
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    console.log(event.target.name)

    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  getErrorMessage() {
    // TODO: return a message when the item or the category is empty
    // You will have to use the state
    if (!this.state.item && !this.state.category) return 'Please write an item and select a category'
    if (!this.state.item) return 'Please write an item'
    if (!this.state.category) return 'Please select a category'
    return ''
  }
  handleSubmit = (e) => {
    e.preventDefault() // Stop the redirection (default behavior)
    let newTodo = {
      item: this.state.item,
      category: this.state.category
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="item" 
            value={this.state.item}
            onChange={this.handleChange}
            placeholder="Your todo item" />
          <select 
            value={this.state.category}
            onChange={this.handleChange}
            name="category">
            <option value="">Select your category</option>
            <option value="shopping">Shopping</option>
            <option value="coding">Coding</option>
            <option value="other">Other</option>
          </select>
          <button disabled={this.getErrorMessage()}>Add</button>
        </form>

        {this.getErrorMessage() && <div className="error-message">
          {this.getErrorMessage()}
        </div>}

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo,i) => (<tr key={i}>
              <td>{todo.item}</td>
              <td>{todo.category}</td>
              <td><button>Delete</button></td>
            </tr>))}
          </tbody>
        </table>

        {/* Perfect to debug: <pre> and JSON.stringify */}
        <pre>this.state = {JSON.stringify(this.state,null,4)}</pre>
      </div>
    );
  }
}

export default App;
