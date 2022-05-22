import React, { Component } from "react";
// import Section from "components/Section/Section";
// import Container from "components/Container/Container";
// import PaintingList from "components/PaintingList/PaintingList";
// import paintings from "./components/paintings.json";
// import ButtonPaint from "components/ButtonPaint";
// import ColorPicker from "components/ColorPicker/ColorPicker";
// import Alert from "components/Alert/Alert";
// import Profile from "components/Profile/Profile";
// import user from "components/Profile/user.json";
// import Counter from "components/Counter/Counter";
// import Modal from "./components/Alls/Modal/Modal";
// import Dropdown from "components/Dropdown/Dropdown"
import initialTodos from "./todos.json";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/TodoList/Form/Form";
import shortid from "shortid";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTask = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => id !== todo.id),
      };
    });
  };

  handleSubmit = (data) => {
    this.setState((prevState) => {
      const addTask = {
        id: shortid.generate(),
        task: data,
        complited: false,
      };

      return { todos: [addTask, ...prevState.todos] };
    });
  };

  render() {
    const { todos } = this.state;

    const allTodos = todos.length;
    const ComplitedTodo = todos.reduce((acc, todo) => {
      return todo.complited ? acc + 1 : acc;
    }, 0);

    return (
      <div>
        <div>
          <p>Общее количество: {allTodos}</p>
          <p>Количество выполненных: {ComplitedTodo}</p>
        </div>

        <Form dataTodo={this.state.todos} onHandleSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos} onBtnClick={this.deleteTask} />
      </div>
    );
  }
}

export default App;

// export default function App(props) {
//   return (
//     <div>
//       <Container>
//         <Section title="Топ недели">

//           {/* <Modal /> */}
//           {/* <Dropdown /> */}
//           {/* <Counter initialValue={10} /> */}
//           {/* <ColorPicker options={colorPickerOptions} /> */}
//           {/* <Alert text="Шеф всё пропало!" type="error" /> */}
//           {/* <Alert text="Шеф всё пропало!" type="warning" /> */}
//           {/* <Alert text="Шеф всё пропало!" type="success" /> */}
//         </Section>

//         {/* <PaintingList items={paintings} /> */}
//         {/* <ButtonPaint type="button" disabled={false} label="Click Me" /> */}
//         {/* <Section title="The Best" classes="is-hidden open"> */}

//         {/* </Section> */}
//       </Container>
//     </div>
//   );
// }
