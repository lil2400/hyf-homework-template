import React from "react";
import toDoList from "./toDoList";

class App extends React.Component {
  render() {
    return toDoList.map((item, index) => (
      // Only do this if items have no stable IDs
      <li key={index}>{item.content}</li>
    ));
  }
}
export default App;
