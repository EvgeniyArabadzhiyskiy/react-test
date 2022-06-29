// ================ Formik Yup Библиотеки =======================

// import FormikForm from "components/Formik/Formik";
// import ProductReviewForm from "components/Formik2/ProductReviewForm";

// import { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <>
//         {/* <FormikForm /> */}
//         <ProductReviewForm />
//       </>
//     );
//   }
// }

// export default App;

import Section from "components/Section/Section";
import Container from "components/Container/Container";
// import PaintingList from "components/PaintingList/PaintingList";
// import paintings from "./paintings.json";
// import ButtonPaint from "components/ButtonPaint";
import ColorPicker from "components/ColorPicker/ColorPicker";
// import Alert from "components/Alert/Alert";
// import Profile from "components/Profile/Profile";
// import user from "components/Profile/user.json";
// import Counter from "components/Counter/Counter";
// import Modal from "./components/Alls/Modal/Modal";
// import Dropdown from "components/Dropdown/Dropdown"
// import initialTodos from "./todos.json";
// import TodoList from "./components/TodoList/TodoList/TodoList";
// import Form from "./components/TodoList/Form/Form";
// import Filter from "./components/TodoList/Filter/Filter";
// import shortid from "shortid";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

// class App extends Component {
//   state = {
//     todos: initialTodos, // Массив из .Json [{ id: "1", task: "Выучить HTML", complited: true}]
//     filter: "",
//   };

//   handleSubmit = (text) => {
//     this.setState((prevState) => {
//       const addTask = {
//         id: shortid.generate(),
//         task: text,
//         complited: false,
//       };

//       return { todos: [addTask, ...prevState.todos] };
//     });
//   };

//   deleteTask = (id) => {
//     this.setState((prevState) => {
//       return {
//         todos: prevState.todos.filter((todo) => id !== todo.id),
//       };
//     });
//   };

//   toggleComplitd = (data) => {
//     this.setState((prevState) => {
//       return {
//         todos: prevState.todos.map((todo) => {
//           return todo.id === data
//             ? { ...todo, complited: !todo.complited }
//             : todo;
//         }),
//       };

//       // if (todo.id === data) {
//       //   return {...todo,complited: !todo.complited}
//       // }
//       // return todo
//     });
//   };

//   changeFilter = (evt) => {
//     this.setState({
//       filter: evt.currentTarget.value,
//     });
//   };

//   getVisibleTodos = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();

//     return this.state.todos.filter((todo) => {
//       return todo.task.toLowerCase().includes(normalizedFilter);
//     });
//   };

//   render() {
//     const { todos } = this.state;

//     const allTodos = todos.length;
//     const ComplitedTodo = todos.reduce((acc, todo) => {
//       return todo.complited ? acc + 1 : acc;
//     }, 0);

//     const visibleTodos = this.getVisibleTodos();

//     return (
//       <div>
//         <div>
//           <p>Общее количество: {allTodos}</p>
//           <p>Количество выполненных: {ComplitedTodo}</p>
//         </div>

//         <Filter
//           filterValue={this.state.filter}
//           onFilterHandler={this.changeFilter}
//         />

//         <Form dataTodo={this.state.todos} onHandleSubmit={this.handleSubmit} />
//         <TodoList
//           todos={visibleTodos}
//           onBtnClick={this.deleteTask}
//           onToggleComplited={this.toggleComplitd}
//         />
//       </div>
//     );
//   }
// }

// export default App;

export default function App(props) {
  return (
    <div>
      <Container>
        <Section title="Топ недели">
          {/* <Modal /> */}
          {/* <Dropdown /> */}
          {/* <Counter initialValue={10} /> */}
          <ColorPicker options={colorPickerOptions} />
          {/* <Alert text="Шеф всё пропало!" type="error" /> */}
          {/* <Alert text="Шеф всё пропало!" type="warning" /> */}
          {/* <Alert text="Шеф всё пропало!" type="success" /> */}
        </Section>

        {/* <PaintingList items={paintings} /> */}
        {/* <ButtonPaint type="button" disabled={false} label="Click Me" /> */}
        {/* <Section title="The Best" classes="is-hidden open"> */}

        {/* </Section> */}
      </Container>
    </div>
  );
}

// ========================= TEST==========================

// function mekeMarkupPokemon({ user, views, likes, previewURL }) {
//   return `
//   <li class="card">
//     <h3 class="user__title">${user}</h3>
//     <img src=${previewURL} alt=${user} class="card__image" width="300" height="200">
//     <p class="user__likes">Likes: ${likes}</p>
//     <p class="user__views">Views: ${views}</p>
//   </li>`;
// }

// function mekeMarkupPokemons(hits) {

//   return  hits.map(({ user, views, likes, previewURL }) => {
//     return `
//       <li class="card">
//         <h3 class="user__title">${user}</h3>
//         <img src=${previewURL} alt=${user} class="card__image" width="300" height="200">
//         <p class="user__likes">Likes: ${likes}</p>
//         <p class="user__views">Views: ${views}</p>
//       </li>`;
//   }).join(' ')

// }

// const gallery = document.querySelector(".gallery");

// fetch(
//   "https://pixabay.com/api/?key=26298929-dc8db63efad38f2c4177a32d6&q=car&image_type=photo&page=1&per_page=12"
// )
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(new Error(`Нет покемона с таким именем`));
//   })
//   .then((pokemon) => {
//     console.log(pokemon.hits);

//     // const markup = pokemon.hits.map(mekeMarkupPokemon).join(" ");
//     const markup = mekeMarkupPokemons(pokemon.hits)

//     gallery.insertAdjacentHTML("beforeend", markup);
//   });
