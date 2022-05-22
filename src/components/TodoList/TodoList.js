import "./TodoList.scss";
import classNames from "classnames";

const ToduList = ({ todos, onBtnClick, onCheckBoxComplited }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, task, complited }) => {
        return (
          <li
            key={id}
            className={classNames("TodoList__item", {
              TodoList__item__completed: complited,
            })}
          >
            <p>{task}</p>
            <input
              type="checkbox"
              checked={complited}
              onChange={(evt) => onCheckBoxComplited(id)}
            />
            <button className="" type="button" onClick={() => onBtnClick(id)}>
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToduList;
