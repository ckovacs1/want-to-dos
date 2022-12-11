import React from 'react';
import ListByDateItem from './ListByDateItem';
import './ListByDateSection.css';

function ListByDateSection({
  todos,
  onClickComplete,
  onClickRemoveButton,
  sortByComplete = false,
}) {
  if (sortByComplete) {
    todos.sort((a, b) => Number(a.complete) - Number(b.complete));
  }

  return (
    <div className="listbydate__date-section">
      <ul className="listbydate__date-list">
        {todos.map(todo => (
          <li
            className="listbydate__date-list-item"
            key={todo._id}
          >
            <ListByDateItem
              todo={todo}
              onClickComplete={onClickComplete}
              onClickRemoveButton={onClickRemoveButton}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListByDateSection;
