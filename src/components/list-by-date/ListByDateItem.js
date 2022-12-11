import React from 'react';
import './ListByDateItem.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IconButton } from '@mui/material';

function ListByDateItem({ todo, onClickComplete }) {
  const { _id, title, description, complete, category, repeatIdx } = todo;
  return (
    <>
      <IconButton onClick={() => onClickComplete(_id, repeatIdx)}>
        {complete ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </IconButton>
      <div className="listbydate__date-item-content">
        <div className="listbydate__date-content-left">
          <div className="listbydate__date-content-title">{title}</div>
          <div className="listbydate__date-content-description">
            {description}
          </div>
        </div>
        <div className="listbydate__date-content-right">
          <div className="listbydate__date-content-category">{category}</div>
        </div>
      </div>
    </>
  );
}

export default ListByDateItem;
