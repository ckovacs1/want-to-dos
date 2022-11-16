import { Button, Typography } from '@mui/material';
import React from 'react';
import Addwanttodo from '../add-want-to-do/Addwanttodo';
import './ListByDate.css';

import ListByDateSection from './ListByDateSection';

function ListByDate() {
  const data = {};
  return (
    <div className="listbydate__container">
      <div className="listbydate__wrapper">
        <Typography
          variant="h5"
          className="primary"
        >
          List By Date (3)
        </Typography>
        <div className="listbydate__date-wrapper">
          <div className="listbydate__date-header">
            <Typography
              variant="h7"
              className="primary"
            >
              Today
            </Typography>
          </div>
          <ListByDateSection />
        </div>
        <div className="listbydate__date-wrapper">
          <div className="listbydate__date-header">
            <Typography
              variant="h7"
              className="primary"
            >
              Tomorrow
            </Typography>
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
