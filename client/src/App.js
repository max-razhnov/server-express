// @flow
import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import todoItems from "./components/constants";

type State = {
  todoItems: Array<object>
};

class App extends React.Component<State> {
  constructor() {
    super();
    this.state = { todoItems };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  addItem() {
    const value = document.getElementById("start-input").value;
    if (value.trim()) {
      let { todoItems } = this.state;
      todoItems.push({ id: todoItems.length, value: value, done: false });
      document.getElementById("start-input").value = "";
      this.setState({
        todoItems: todoItems
      });
    }
  }
  componentDidMount() {
    const inputs = [...document.getElementsByClassName("field")];
    inputs.forEach((item, id) => {
      if (id !== 0) {
        item.addEventListener("mouseover", () => {
          item.style.opacity = "0.8";
          item.style.transition = "0.5s ease-out";
        });
        item.addEventListener("mouseout", () => {
          item.style.opacity = "1";
          item.style.transition = "0.5s ease-out";
        });
      }
    });
  }

  removeItem(index: number) {
    let { todoItems } = this.state;
    let newtodoItems = [];

    for (let i = 0; i < todoItems.length; i++) {
      if (i !== index) {
        newtodoItems.push(todoItems[i]);
      }
    }
    todoItems = [...newtodoItems];
    this.setState({
      todoItems: todoItems
    });
  }

  completeItem(index) {
    let { todoItems } = this.state;
    let arr = [];
    todoItems.forEach((item, id) => {
      if (id === index) {
        item.done = !item.done;
      }
      if (item.done) {
        arr.push(item);
      } else {
        arr.unshift(item);
      }
    });
    todoItems = [...arr];
    this.setState({
      todoItems: todoItems
    });
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title is-1" style={{ color: "white" }}>
            To do app
          </h1>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <Input id="start-input" readOnly={false} />
              <button
                className={"button is-primary is-smal"}
                onClick={this.addItem}>
                add item
              </button>
            </div>
          </div>
          <TodoList
            removeItem={this.removeItem}
            todoItems={todoItems}
            completeItem={this.completeItem}
          />
        </header>
      </div>
    );
  }
}

export default App;
