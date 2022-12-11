import React from 'react';
import './ListByDateItem.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';
import { removeTodo } from '../../api/todo';

function ListByDateItem({ todo, onClickComplete, onClickRemoveButton }) {
  const { _id, title, description, complete, category, repeatIdx, parentId } =
    todo;

  const removeId = parentId || _id;

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
      <IconButton
        onClick={() => onClickRemoveButton(removeId)}
        sx={{ ml: 0.5 }}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
    </>
  );
}

export default ListByDateItem;
