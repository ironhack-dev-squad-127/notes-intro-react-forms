// 1st Rule: 1 input/select/textarea = 1 state value
// 2nd Rule: always initialise the state in the constructor
// 3rd Rule: always add the attributes `value` and `onChange` for each input/select/textarea

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: 'Buy carrots', // Inital value for the item
      category: 'shopping', // Inital value for the category
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
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        {/* Perfect to debug: <pre> and JSON.stringify */}
        <pre>this.state = {JSON.stringify(this.state,null,4)}</pre>
        <form>
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
              <th>Categroy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>...</td>
              <td>...</td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
