// import stl from "./ToduList.module.css";

const ToduList = ({ todos, onBtnClick }) => {
  return (
    <ul>
      {todos.map(({ id, task }) => {
        return (
          <li key={id}>
            <p>{task}</p>
            <button type="button" onClick={() => onBtnClick(id)}>
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToduList;
