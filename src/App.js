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
    this.setState({
      item: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
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
          <button>Add</button>
        </form>

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
