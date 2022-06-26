import React, { Component } from "react";
import shortid from "shortid";
import "./Form.scss";
// import initialTodos from "../../../paintings.json";
import Filter from "../Filter/Filter";
import TodoList from "components/TodoList/TodoList/TodoList";

class Form extends Component {
  state = {
    todos: [],
    inputValue: "",
    filter: "",
  };

  componentDidMount() {
    const localStorageTodos = localStorage.getItem("todos");
    const parsed = JSON.parse(localStorageTodos);

    if (parsed) {
      this.setState({ todos: parsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  inputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  hendleFormSubmit = (evt) => {
    evt.preventDefault();

    this.addTodos(this.state.inputValue);
    this.resetForm();
  };

  addTodos = (text) => {
    const newTodo = {
      id: shortid.generate(),
      task: text,
      complited: false,
    };

    this.setState((prevState) => {
      return { todos: [newTodo, ...prevState.todos] };
    });
  };

  deleteTodos = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => todo.id !== id),
      };
    });
  };

  handleCheckboxChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) =>
          id === todo.id ? { ...todo, complited: !todo.complited } : todo
        ),
      };
    });
  };

  handleChangeFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  clearFilter = () => {
    this.setState({ filter: "" });
  };

  resetForm = () => {
    this.setState({ inputValue: "" });
  };

  render() {
    const { todos, filter } = this.state;
    const allTodos = todos.length;
    const makeTodos = todos.reduce((total, todo) => {
      return todo.complited ? total + 1 : total;
    }, 0);

    const normalizeFilter = filter.toLocaleLowerCase();
    const filtredTodos = todos.filter((todo) =>
      todo.task.toLocaleLowerCase().includes(normalizeFilter)
    );

    return (
      <div>
        <Filter
          onChangeFilter={this.handleChangeFilter}
          onClearFilter={this.clearFilter}
          filterValue={this.state.filter}
        />
        <h3>Всего заметок: {allTodos}</h3>
        <h3>Выполнено: {makeTodos}</h3>
        <form className="TodoEditor" onSubmit={this.hendleFormSubmit}>
          <textarea
            className="TodoEditor__textArea"
            value={this.state.inputValue}
            onChange={this.inputChange}
          ></textarea>
          <button className="TodoEditor__btn" type="submit">
            Сохранить
          </button>
        </form>

        <TodoList
          todos={filtredTodos}
          onDeleteTodos={this.deleteTodos}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  }
}

export default Form;

// import "./Form.scss";

// class Form extends Component {
//   state = {
//     updateTodo: this.props.dataTodo,
//     inputValue: "",
//   };

//   formSubmit = (evt) => {
//     evt.preventDefault();

//     this.props.onHandleSubmit(this.state.inputValue);
//     this.resetForm();
//   };

//   inputChange = (evt) => {
//     this.setState({ inputValue: evt.target.value });
//   };

//   resetForm = () => {
//     this.setState({
//       inputValue: "",
//     });
//   };

//   handleLicense = (evt) => {
//     console.log(evt.target.checked);
//     this.setState({
//       license: evt.target.checked,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form className="TodoEditor" onSubmit={this.formSubmit}>
//           <textarea
//             type="text"
//             className="TodoEditor__textArea"
//             value={this.state.inputValue}
//             name="todo"
//             onChange={this.inputChange}
//           ></textarea>

//           <button className="TodoEditor__btn" type="submit">
//             Сохранить
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
