import React, { Component } from "react";
// import TodoList from "../../../components/TodoList/TodoList";
// import shortid from "shortid";

class Form extends Component {
  state = {
    updateTodo: this.props.dataTodo,
    inputValue: "",
    experions: "junior",
    license: false,
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

  handleRadioBtn = (evt) => {
    // console.log(evt.target.value);
    // const { name, value } = evt.target
    //   this.setState({
    //     [name]: value
    //   })
  };

  handleLicense = (evt) => {
    console.log(evt.target.checked);
    this.setState({
      license: evt.target.checked,
    });
  };

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicense}
          />
          Согласен с условием
        </label>

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

          <label>
            Junior
            <input
              type="radio"
              name="experions"
              value="junior"
              checked={this.state.experions === "junior"}
              onChange={this.handleRadioBtn}
            />
          </label>
          <label>
            Middle
            <input
              type="radio"
              name="experions"
              value="middle"
              checked={this.state.experions === "middle"}
              onChange={this.handleRadioBtn}
            />
          </label>
          <label>
            Senior
            <input
              type="radio"
              name="experions"
              value="senior"
              checked={this.state.experions === "senior"}
              onChange={this.handleRadioBtn}
            />
          </label>
        </form>
        {/* <TodoList todos={this.state.updateTodo} onBtnClick={this.deleteTask} /> */}
      </div>
    );
  }
}

export default Form;
