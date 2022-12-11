const FITNESS = 'fitness';
const NUTRITION_DIET = 'nutrition/diet';
const LIFESTYLE = 'lifestyle';
const SKILLS_LEARNING = 'skills/learning';
const MINDFULNESS = 'mindfulness';

export const CATEGORY = [
  {
    value: FITNESS,
    label: 'Fitness',
  },
  {
    value: NUTRITION_DIET,
    label: 'Nutrition/Diet',
  },
  {
    value: LIFESTYLE,
    label: 'Lifestyle',
  },
  {
    value: SKILLS_LEARNING,
    label: 'Skills/Learning',
  },
  {
    value: MINDFULNESS,
    label: 'Mindfulness',
  },
];

export const CATEGORY_COLOR = {
  [FITNESS]: 'primary',
  [NUTRITION_DIET]: 'secondary',
  [LIFESTYLE]: 'warning',
  [SKILLS_LEARNING]: 'success',
  [MINDFULNESS]: 'info',
};
