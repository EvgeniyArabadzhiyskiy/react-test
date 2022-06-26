import "./TodoList.scss";
import classNames from "classnames";

const TodoList = ({ todos, onDeleteTodos, onCheckboxChange }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, task, complited }) => {
        return (
          <li
            className={classNames("TodoList__item", {
              TodoList__item__completed: complited,
            })}
            key={id}
          >
            <input
              className="TodoList__checkbox"
              type="checkbox"
              checked={complited}
              onChange={() => onCheckboxChange(id)}
            />
            <p className="TodoList__text">{task}</p>
            <button
              className="TodoList__btn"
              type="button"
              onClick={() => onDeleteTodos(id)}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

// import "./TodoList.scss";
// import classNames from "classnames";

// const ToduList = ({ todos, onBtnClick, onToggleComplited }) => {
//   return (
//     <ul className="TodoList">
//       {todos.map(({ id, task, complited }) => {
//         return (
//           <li
//             key={id}
//             className={classNames("TodoList__item", {
//               TodoList__item__completed: complited,
//             })}
//           >
//             <input
//               type="checkbox"
//               className="TodoList__checkbox"
//               checked={complited}
//               onChange={(evt) => onToggleComplited(id)}
//             />
//             <p className="TodoList__text">{task}</p>

//             <button
//               className="TodoList__btn"
//               type="button"
//               onClick={() => onBtnClick(id)}
//             >
//               Удалить
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default ToduList;
