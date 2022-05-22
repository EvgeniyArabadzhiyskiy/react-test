import React, { Component } from "react";
// import TodoList from "../../../components/TodoList/TodoList";
// import shortid from "shortid";

class Form extends Component {
  state = {
    updateTodo: this.props.dataTodo,
    inputValue: "",
    // name: "",
    // tag: "",
  };

  formSubmit = (evt) => {
    evt.preventDefault();

    // this.setState((prevState) => {
    //   const addTask = {
    //     id: shortid.generate(),
    //     task: this.state.inputValue,
    //     complited: false,
    //   };

    //   return { updateTodo: [addTask, ...prevState.updateTodo] };
    // });

    this.props.onHandleSubmit(this.state.inputValue);
    this.resetForm();
  };

  inputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  //   deleteTask = (id) => {
  //     this.setState((prevState) => {
  //       console.log(prevState);
  //       return {
  //         updateTodo: prevState.updateTodo.filter((todo) => id !== todo.id),
  //       };
  //     });
  //   };

  resetForm = () => {
    this.setState({
      inputValue: "",
    });
  };

  //   handleChange = (evt) => {
  //     // console.log(evt.target.name)
  //     const { name, value } = evt.target

  //     this.setState({
  //         [name]: value
  //     })
  //   }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label>
            <input
              type="text"
              value={this.state.inputValue}
              name="todo"
              onChange={this.inputChange}
            />
          </label>
          <button type="submit">Сохранить</button>
        </form>
        {/* <TodoList todos={this.state.updateTodo} onBtnClick={this.deleteTask} /> */}
      </div>
    );
  }
}

export default Form;
