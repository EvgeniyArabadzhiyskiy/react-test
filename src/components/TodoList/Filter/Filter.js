const Filter = ({ onChangeFilter, onClearFilter, filterValue }) => {
  return (
    <div>
      <input type="text" value={filterValue} onChange={onChangeFilter} />
      <button type="button" onClick={onClearFilter}>
        X
      </button>
    </div>
  );
};

export default Filter;

// const Filter = ({ filterValue, onFilterHandler }) => {
//   return (
//     <label>
//       Фильтр по названию
//       <input type="text" value={filterValue} onChange={onFilterHandler} />
//     </label>
//   );
// };

// export default Filter;
