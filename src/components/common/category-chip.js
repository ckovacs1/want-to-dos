import { Chip } from '@mui/material';
import React from 'react';
import { CATEGORY_COLOR } from '../../constants/category';

function CategoryChip({ category }) {
  return (
    <Chip
      color={CATEGORY_COLOR[category]}
      label={category}
    />
  );
}

export default CategoryChip;
