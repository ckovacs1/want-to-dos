import React from 'react';
import ListByDateItem from './ListByDateItem';
import './ListByDateSection.css';

function ListByDateSection({ todos, onClickComplete }) {
  return (
    <div className="listbydate__date-section">
      <ul className="listbydate__date-list">
        {todos.map(todo => (
          <li className="listbydate__date-list-item">
            <ListByDateItem
              todo={todo}
              onClickComplete={onClickComplete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListByDateSection;
