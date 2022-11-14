import React from 'react';
import ListByDateItem from './ListByDateItem';
import './ListByDateSection.css';

function ListByDateSection() {
  return (
    <div className="listbydate__date-section">
      <ul className="listbydate__date-list">
        <li className="listbydate__date-list-item">
          <ListByDateItem />
        </li>
        <li className="listbydate__date-list-item">
          <ListByDateItem />
        </li>
        <li className="listbydate__date-list-item">
          <ListByDateItem />
        </li>
      </ul>
    </div>
  );
}

export default ListByDateSection;
