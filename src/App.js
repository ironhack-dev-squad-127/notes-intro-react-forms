import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <form>
          <input type="text" name="item" placeholder="Your todo item" />
          <select name="category">
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
