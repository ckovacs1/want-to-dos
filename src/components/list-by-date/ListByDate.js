import { Button } from '@mui/material';
import React from 'react';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import './ListByDate.css';

import ListByDateSection from './ListByDateSection';

function ListByDate() {
  return (
    <div className="listbydate__container">
      <div className="listbydate__wrapper">
        <div className="listbydate__date-wrapper">
          <div className="listbydate__date-header">
            <div className="listbydate__date-text">January 30</div>
          </div>
          <ListByDateSection />
        </div>
        <div className="listbydate__date-wrapper">
          <div className="listbydate__date-header">
            <div className="listbydate__date-text">January 30</div>
          </div>
          <ListByDateSection />
        </div>
      </div>
      <div className="listbydate__add-wrapper">
        <Addwanttodo />
      </div>
    </div>
  );
}

export default ListByDate;
