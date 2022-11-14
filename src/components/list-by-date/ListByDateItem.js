import React from 'react';
import './ListByDateItem.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function ListByDateItem() {
  return (
    <>
      <CheckBoxOutlineBlankIcon />
      <div className="listbydate__date-item-content">
        <div className="listbydate__date-content-left">
          <div className="listbydate__date-content-title">example title</div>
          <div className="listbydate__date-content-description">
            example description
          </div>
        </div>
        <div className="listbydate__date-content-right">
          <div className="listbydate__date-content-category">
            example category
          </div>
        </div>
      </div>
    </>
  );
}

export default ListByDateItem;
